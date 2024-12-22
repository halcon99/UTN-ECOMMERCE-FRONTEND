import React, { useContext, useState } from 'react'
import useForm from '../Hooks/useForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { UserDetailScreen } from './UserDetailScreen'
import './MyAccountScreen.css'

export const MyAccountScreen = () => {

	const {formState, handleChange}= useForm({
		email: '',
        password: ''
    })

	const [errorsState, setErrorsState]= useState({
        email: '',
        password: ''
    })

	const {login, is_authenticated_state, logout, setIsAdmin}= useContext(AuthContext)
	

	const handleLogin= async (event)=>{
		event.preventDefault()
        const response= await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,
            {
                method: 'POST',
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formState)
            }
        )
        
        const data= await response.json()
		console.log(data)
		

        if (!data.ok){
            if(data.status == 401){
				setErrorsState((prevState)=>{
					return {...prevState, password: data.message}
				})
			}
			if (data.status == 403 || data.status == 404){
				setErrorsState((prevState)=>{
					return {...prevState, email: data.message}
				})
			}
        }else{
			data.data.user_info.role === 'admin'?
			setIsAdmin(true): ''

            login(data.data.acces_token)
        }
        console.log(data)


	}


  return (
    <div>

	  	<div>
			{
			is_authenticated_state ?
			//userDetailScreen falta
			<> 
				<h1>Datos del usuario</h1>
				<button className="logout-button" onClick={logout}>Cerrar Sesión</button>
			</>
			:
			<>
			<form onSubmit={handleLogin} className=''>
				<div>
					<label>Ingresa tu email</label>
					<input onChange={handleChange} type="email" name='email' id='email' placeholder='fulano@gmail.com'
					value={formState.email}/>
					{
                    	errorsState.email && <span style={{color: 'red'}}>{errorsState.email}</span>
                	}
				</div>
				<div>
					<label>Ingresa tu contraseña</label>
					<input onChange={handleChange} type="password" name='password' id='password'
					value={formState.password}/>
					{
                    	errorsState.password && <span style={{color: 'red'}}>{errorsState.password}</span>
                	}
				</div>
				<button type='submit'>Iniciar sesion</button>
				<Link to='/forgot-password'>Olvide mi contraseña</Link>
				<h3>
					No tienes cuenta?
					<Link to='/register'>Registrate</Link>
				</h3>
			</form>
			</>
			}
    	</div>
   
    </div>
  )
}
