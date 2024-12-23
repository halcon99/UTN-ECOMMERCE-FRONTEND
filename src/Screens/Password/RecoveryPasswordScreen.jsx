import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useForm from '../../Hooks/useForm'

export const RecoveryPasswordScreen = () => {
    const {reset_token}= useParams()
    const navigate= useNavigate()

    const {formState, handleChange}= useForm({
        password: ''
    })


    const handleRecoveryPassword= async (event)=>{
        event.preventDefault()
        const response= await fetch(import.meta.env.VITE_API_URL + '/api/auth/recovery-password',
            {
                method: 'PUT',
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    password: formState.password,
                    reset_token    
                })
            }
            
        )
        const data= await response.json()
        console.log(data)
        alert(data.message)

        if (data.ok){
            navigate('/login')
        }
    }   

    
  return (
    <div>
        <h1>Modifica tu contraseña</h1>
        
        <form onSubmit={handleRecoveryPassword}>
            <div>
                <label>Ingresa tu nueva contraseña:</label>
                <input onChange={handleChange} type="password" name='password' id='password'
                value={formState.password}/>
            </div>
            <button type='submit'>Enviar</button>
            <Link to='/login'>Iniciar sesion</Link>
        </form>
    </div>
  )
}