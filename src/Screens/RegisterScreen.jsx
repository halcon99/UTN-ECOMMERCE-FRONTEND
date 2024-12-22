import React, { useState } from 'react'
import useForm from '../Hooks/useForm'
import { useNavigate } from 'react-router-dom'


export const RegisterScreen = () => {
    const navigate= useNavigate()

    const {formState, handleChange}= useForm({
        email: '',
        password: '',
        name: ''
    })
    
    const [errorsState, setErrorsState]= useState({
        email: '',
        password: '',
        name: ''
    })

    const handleRegister= async (event)=>{
        event.preventDefault()
        console.log('Formulario de registro enviado')
    

        const responseHTTP= await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        
        const data= await responseHTTP.json()
        console.log(data)


        if (!data.ok){
            if (data.data.registerState.name.errors){
                setErrorsState((prevState)=>{
                    return {...prevState, name: data.data.registerState.name.errors[0].message}
                })
            }
            if (data.data.registerState.password.errors){
                setErrorsState((prevState)=>{
                    return {...prevState, password: data.data.registerState.password.errors[0].message}
                })
            }
            if (data.data.detail){
                setErrorsState((prevState)=>{
                    return {...prevState, email: data.data.detail}
                })
            }
        }else{
            navigate('/login')  
        }
       
    }
    
    
  return (
    <div>
        <h1>Registrate en Fravega</h1>
        <form onSubmit={handleRegister}>
            <div>
                <label>Ingresa tu nombre:</label>
                <input onChange={handleChange} type="text" name='name' id='name' placeholder='fulano'
                value={formState.name}/>
                {
                    errorsState.name && <span style={{color: 'red'}}>{errorsState.name}</span>
                }
            </div>
            <div>
                <label>Ingresa tu email:</label>
                <input onChange={handleChange} type="email" name='email' id='email' placeholder='fulano@gmail.com'
                value={formState.email}/>
                {
                    errorsState.email && <span style={{color: 'red'}}>{errorsState.email}</span>
                }
            </div>
            <div>
                <label>Ingresa tu contraseña:</label>
                <input onChange={handleChange} type="password" name='password' id='password'
                value={formState.password}/>
                {
                    errorsState.password && <span style={{color: 'red'}}>{errorsState.password}</span>
                }
            </div>
            <button type='submit'>Registrarse</button>
        </form>
    </div>
  )
}
