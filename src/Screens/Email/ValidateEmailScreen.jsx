import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const ValidateEmailScreen = () => {
    const {validation_token}= useParams()
    const navigate= useNavigate()
    const [validation_email_response_state, setValidationEmailResponseState]= useState({
        is_loading: true,
        response: null,
        is_error: null
    })

    const verifyEmailToken= async (validation_token)=>{
        try{
            const response= await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify-email/${validation_token}`)
            const result= await response.json()

            setValidationEmailResponseState(
                (prevState)=>{
                    return {...prevState, is_loading: false, response: result}
                }
            )
            if (result.status == 200){
                alert('Email verificado!')
                navigate('/login')
            }

        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        verifyEmailToken(validation_token)
    },[])

  return (
    <div>
        {
            validation_email_response_state.is_loading 
            && <h2>Cargando...</h2>
        }

    </div>
  )
}

export default ValidateEmailScreen