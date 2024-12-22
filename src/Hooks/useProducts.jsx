//logica de productos

import { useEffect, useState } from "react"
import { getAuthenticatedHeaders } from "../utils/fetching.js"

const useProducts= ()=>{
    const [products_state, setProducts]= useState([])
    const [products_loading_state, setProductsLoading]= useState(true)
    const [products_error_state, setProductsError]= useState(null)

    const obtenerProductos= async ()=>{
        const response= await fetch(import.meta.env.VITE_API_URL + '/api/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data= await response.json()
        console.log(data)
        if (!data.payload.ok){
            setProductsError(data.error)
            setProductsLoading(false)
            return
        }else{
            setProducts(data.payload.products)
            setProductsLoading(false)
        }
    }

    useEffect(
        ()=>{
            obtenerProductos()
        },
        [] //se ejecuta una sola vez
    )

    return{
        products_error_state,
        products_loading_state,
        products_state
    }
}

export default useProducts
