import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import './Products.css'
import { HeaderFooterContext } from '../../context/HeaderFooterContext'

export const Products = ({products}) => {
    const {searchProduct}=useContext(HeaderFooterContext)

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
    )

  return (
    <div className='products-list'>
        {
            filteredProducts.map((product) =>{
                return (
                    <div key={product._id} className='product_card_container'>
                        <Link to={`/product/${product._id}`}>
                            <ProductCard product={product}/>
                        </Link>
                    </div>         
                )
            })
        }
    </div>
  )
}
