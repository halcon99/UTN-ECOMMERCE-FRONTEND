import React, { useId } from 'react'
import useFilters from '../../Hooks/useFilters'
import './Filters.css'


export const Filters = () => {

    const {filters, setFilters}= useFilters()

    const minPriceFilterId= useId()
    const categoryFilterId= useId()

    const handleChangeMinPrice= (event)=>{
        setFilters(prevState=>({...prevState, minPrice: event.target.value}))
    }
    const handleChangeCategory= (event)=>{
        setFilters(prevState=>({...prevState, category: event.target.value}))
    }

    
  return (
    <div className='filters-container'>
        <div className='filter'>
            <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
            <input 
            type="range"
            id= {minPriceFilterId}
            min='0'
            max= '2000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
        
        <div className='filter'>
            <label htmlFor={categoryFilterId}>Categoria</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="Celulares">Celulares</option>
                <option value="Laptops">Laptops</option>
                <option value="Consolas">Consolas</option>
            </select>
        </div>

        
        
    </div>
  )
}
