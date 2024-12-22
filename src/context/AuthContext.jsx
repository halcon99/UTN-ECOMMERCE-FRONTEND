import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
//componente
export const AuthContext= createContext()

//Componente proveedor
export const AuthProvider= ({children})=>{

    //si hay token en el session o localstorage entonces esta autentificado
    const access_token= Boolean(sessionStorage.getItem('acces-token'))
    const [is_authenticated_state, setIsAuthenticated]= useState(access_token)
    const [is_admin, setIsAdmin]= useState()


    const navigate= useNavigate()

    useEffect(
        ()=>{
            Boolean(sessionStorage.getItem('acces-token')) && setIsAuthenticated(true)
        },
        []
    )

    const login= (auth_token)=>{
        sessionStorage.setItem('acces-token', auth_token)
        setIsAuthenticated(true)
        navigate('/')
    } 

    const logout= ()=>{
        sessionStorage.removeItem('acces-token')
        setIsAuthenticated(false)
        navigate('/login')
    }

    const [filters, setFilters]= useState({
        category: 'all',
        minPrice: 0
    })

    return(
        <AuthContext.Provider value={{is_authenticated_state, login, logout, filters, setFilters,
        setIsAdmin, is_admin}}>
            {children}
        </AuthContext.Provider>
    )
}