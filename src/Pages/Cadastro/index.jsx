import { Typography } from "@mui/material"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Select from "../../components/Select"
import { BoxHeader, CustomBox, Form } from "./style"
import logo from '../../assets/logo.svg'
import api from "../../Services/api"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"


const Cadastro = () =>{
    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required('Campo Obrigatório').trim(),
        email: yup.string().email('Email inválido').required('Campo Obrigatório').trim(),
        password: yup.string().required('Campo Obrigatório').trim(),
        confirmPassword: yup.string().required('Campo Obrigatório').oneOf([yup.ref('password')], 'Senhas diferentes'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = ({name, email, password, course_module}) =>{
        api.post('users', {name, password, email, course_module, bio: ' ', contact: ' '})
        .then(response =>{
            toast.success('Conta criada com sucesso!')
            return history.push('/')
        })
        .catch((err) =>{
            toast.error('Ops! Algo deu errado')
        })
    }

    const backLogin = () =>{
        return history.push('/')
    }

    return(
        <>
        <BoxHeader>
            <img src={logo} alt='logo'/>
            <Button className='grey' onClick={backLogin}>Voltar</Button>
        </BoxHeader>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <CustomBox>
                <Typography variant="h6" component={'h1'}>Crie sua conta</Typography>
                <p>Rapido e grátis, vamos nessa</p>
            </CustomBox>

            <Input error={errors.name?.message} register={register} name='name' label={'Nome'} type={'text'} placeholder={'Digite aqui seu nome'}/>
            <Input error={errors.email?.message} register={register} name='email' label={'Email'} type={'email'} placeholder={'Digite aqui seu email'}/>
            <Input error={errors.password?.message} register={register} name='password' label={'Senha'} type={'password'} placeholder={'Digite aqui sua senha'}/>
            <Input error={errors.confirmPassword?.message} register={register} name='confirmPassword' label={'Confirmar Senha'} type={'password'} placeholder={'Digite aqui sua senha'}/> 
            <Select register={register} course_module='course_module'>
                <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo (Introdução ao Frontend)</option> 
                <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo (Frontend Avançado)</option> 
                <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo (Introdução ao Backend)</option> 
                <option value='Quarto módulo (Backend Avançado)'>Quarto módulo (Backend Avançado)</option>
            </Select>

            <Button type='submit'>Cadastrar</Button>
        </Form>
        
        </>
    )
}

export default Cadastro