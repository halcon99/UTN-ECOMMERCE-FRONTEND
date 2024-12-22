//logica de filtros 
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const useFilters= ()=>{
    const {filters, setFilters}= useContext(AuthContext)

    const filterProducts=(products_state)=>{
        return products_state.filter(product=>{
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        }) 
    }

    return{
        filters,
        filterProducts,
        setFilters
    }
}

export default useFilters