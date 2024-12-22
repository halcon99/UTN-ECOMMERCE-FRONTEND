import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'


export const ForgotPasswordScreen = () => {

    const {formState, handleChange}= useForm({
        email: ''
    })

    const handleForgotPassword= async (event)=>{
        const response= await fetch(import.meta.env.VITE_API_URL + '/api/auth/forgot-password',
            {
                method: 'PUT',
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({
                    password: formState.email
                })
            }
        )
        const data= await response.json()
        console.log(data)
    } 

  return (
    <div>
        <h1>Restablecer contraseña</h1>
        <p>Se te enviara un correo electronico con las instrucciones</p>
        <form onSubmit={handleForgotPassword}>
            <div>
                <label>Ingresa tu email de recuperacion:</label>
                <input onChange={handleChange} type="email" name='email' id='email' placeholder='fulano@gmail.com'
                value={formState.email}/>
            </div>

            <button type='submit'>Restablecer</button>
            <Link to='/login'>Iniciar sesion</Link>
        </form>
    </div>
  )
}
