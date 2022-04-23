import { AddTech, Content, EmptyTech, Header, Nav, Tecnologias, ModalEdit} from "./style"
import logo from "../../assets/logo.svg"
import Button from "../../components/Button"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"
import Input from "../../components/Input"
import { useForm } from "react-hook-form"
import Select from "../../components/Select"
import Modal from "../../components/Modal"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import api from "../../Services/api"
import Card from "../../components/Card"

const Home = ({authenticated,setAuthenticated}) =>{

    const [token] = useState(JSON.parse(localStorage.getItem('@KenzieHub:token')))

    const [user] = useState(JSON.parse(localStorage.getItem('@KenzieHub:user')))

    const [techs, setTechs] = useState([])

    const [openModal, setOpenModal] = useState(false)

    const [openModalEdit, setOpenModalEdit] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [techId, setTechId] = useState('')

    useEffect(()=>{
        !!user&&
        api.get(`/users/${user.id}`)
        .then(response => setTechs(response.data.techs))

    },[techs])


    const schema = yup.object().shape({
        title: yup.string().required('Preencha o Campo').trim()
    })
    
    const {register,handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const logout = () =>{
        localStorage.clear()
        toast.success('Logout bem-sucedido')
        setAuthenticated(false)
    }

    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () =>{
        setOpenModal(false)
    }

    const onSubmitModal = (data,e) =>{
        api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        .then(response => toast.success('Tecnologia cadastrada!'))
        .catch(err => toast.error('Tecnologia já cadastrada'))
        
        e.target.reset()  
    }

    const defaultValue = (event) =>{
        setOpenModalEdit(true) 
        const tech = techs.find(tech => tech.id === event.target.id)
        tech&&setTechId(tech.id)
        setInputValue(tech.title)
    }

    const editTech = ({status}) =>{
        api.put(`/users/techs/${techId}`,{status: `${status}`},{
            headers:{
                Authorization: `Bearer ${token}` 
            }
        })
        .then(response => {
            toast.success('Nivel atualizado!')
            setOpenModalEdit(false)
        })
    }

    const deleteTech = () =>{
        api.delete(`users/techs/${techId}`,{
            headers:{
                Authorization: `Bearer ${token}` 
            }
        })
        .then(response => {
            toast.success('Tecnologia excluida')
            setOpenModalEdit(false)
        })
    }

    return(
        <>
            {authenticated ? 
                <>
                <Modal
                title={'Cadastrar Tecnologia'}
                open={openModal}
                onClose={handleClose}
                close = {setOpenModal}
                >
                    <form onSubmit={handleSubmit(onSubmitModal)}>
                    <Input label={'Nome'} register={register} error={errors.title?.message} type='text' name='title' placeholder='Digite o nome da tecnologia'/>
                    <Select title={'Selecionar Status'} course_module="status" register={register}>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </Select>
                    <Button type='submit'>Cadastrar Tecnologia</Button>
                    </form>
                </Modal>

                    <Modal
                    title={'Tecnologia Detalhes'}
                    open={openModalEdit}
                    onClose={()=> setOpenModalEdit(false)}
                    close = {setOpenModalEdit}
                    closeAfterTransition
                    >
                        <form onSubmit={handleSubmit(editTech)}>
    
                        <Input 
                        defaultValue = {inputValue}
                        label={'Nome do projeto'} 
                        register={register} 
                        error={errors.title?.message} 
                        type='text' 
                        name='title' 
                        placeholder='Digite o nome da tecnologia'/>
    
                        <Select title={'Selecionar Status'} course_module="status" register={register}>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </Select>
                        <div>
                            <Button type='submit'>Salvar Alterações</Button>
                            <Button onClick={deleteTech}>Excluir</Button>
                        </div>
                        </form>
                    </Modal>

                <Nav>
                    <img alt="logo" src={logo}/>
                     <Button onClick={logout}>Sair</Button>
                </Nav>
                <Header>
                    <h1>Olá, {user.name}</h1>
                    <p>{user.course_module}</p>
                </Header>
                <Content>
                    <AddTech>
                        <h1>Tecnologias</h1>
                        <button onClick={handleOpen}>+</button>
                    </AddTech>
                    <Tecnologias>
                         {!!techs.length?
                         techs.map(({id,title,status}) => <Card key={id} id={id} title={title} status={status} onClick={defaultValue}/>)
                         :
                         <EmptyTech>
                             <h1>Você não cadastrou nenhuma tecnologia</h1>
                             <span>click aqui para cadastrar</span>
                             <button onClick={handleOpen}>+</button>
                         </EmptyTech>
                        }
                    </Tecnologias>
                </Content>
                </>
            :
                <Redirect to="/"/>
            }

        </>
    )
}

export default Home