import React, { useContext, useState } from 'react'
import './Body.css'
import CustomSlider from '../CustomSlider'
import useProducts from '../../Hooks/useProducts'
import { Link } from 'react-router-dom'
import useFilters from '../../Hooks/useFilters'
import { Products } from '../Products/Products'
import { Filters } from '../Products/Filters'
import { AuthContext } from '../../context/AuthContext'



export const Body = () => {
    const sliderImages= [
        {src:"/images/slider1.png", alt:'slide1'},
        {src:"/images/slider2.png", alt:'slide2'},
        {src:"/images/slider3.png", alt:'slide3'},
        {src:"/images/slider4.png", alt:'slide4'},
        {src:"/images/slider5.png", alt:'slide5'}
    ]

    const {products_error_state, products_loading_state, products_state}= useProducts()

    const {filterProducts}= useFilters()
    const filteredProducts= filterProducts(products_state)

    const {is_admin, is_authenticated_state}= useContext(AuthContext)


  return (
    <div className='body'>
        <div className='slider_container'>
            <div className='slider'>
                <CustomSlider images={sliderImages}/>
            </div>
        </div>

        <section className='section-products'>
            <h2>Nuestro productos destacados</h2>
            <Filters/>
            {is_admin && is_authenticated_state === true ?
                <Link to={'/product/new'}>
                    <button style={{height:40, width: 200, backgroundColor:'#6313AF', color: '#ffff', 
                    border: '2px solid black', borderRadius: '10px', cursor: 'pointer'}}>
                        Crear Producto
                    </button>
                </Link>
                : <></>
            }
            <div>
                {
                    products_loading_state
                    ? <span>CARGANDO..</span>
                    : (
                        products_error_state
                        ? <span>{products_error_state}</span>
                        : <Products products={filteredProducts}/>
                    )
                }

            </div>
        </section>
    </div>
  )
}
