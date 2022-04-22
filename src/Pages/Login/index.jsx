import { AiEye, AiEyeInvisible, BoxLogo, Form } from './style'
import logo from '../../assets/logo.svg'
import { Typography } from '@mui/material'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../Services/api'
import { toast } from 'react-toastify'

const Login = () =>{

    const [visible, setVisible] = useState(true)

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email('Email Inválido').required('Preencha o login'),
        password: yup.string().required('Preencha a senha'),
    })

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const backSingup = () =>{
        history.push('/cadastro')
    }

    const onSubmitFunction = (data) => {
        api.post('/sessions', data)
        .then(response => {
            toast.success('Login realizado com sucesso')
            localStorage.setItem('@KenzieHub:token',JSON.stringify(response.data.token))
            localStorage.setItem('@KenzieHub:user',JSON.stringify(response.data.user))
            history.push('/home')
        })
        .catch(err =>{
            toast.error('Email ou Senha incorreto')
        })
    }

    const passwordVisible = () =>{
        setVisible(!visible)
    }

    return(
        <>
        <BoxLogo>
            <img src={logo} alt='logo'/>
        </BoxLogo>
        
        <Form onSubmit={handleSubmit(onSubmitFunction)} buttonColor = {true}>
            <Typography variant='h6' component='h1'>Login</Typography>

            <Input register={register} error={errors.email?.message} name='email' label={'Email'} type={'email'} placeholder='Email'/>
            <Input register={register} error={errors.password?.message} name='password' label={'Senha'}   type={visible? 'password': 'text'} placeholder='Senha'/>
            {visible? <AiEye onClick={passwordVisible}/> : <AiEyeInvisible onClick={passwordVisible}/>}

            <Button type='submit'>Entrar</Button>

            <span>Ainda não possui uma conta?</span>

            <div>
            <Button onClick={backSingup} >Cadastre-se</Button>
            </div>
        </Form>

        </>
    )
}

export default Login