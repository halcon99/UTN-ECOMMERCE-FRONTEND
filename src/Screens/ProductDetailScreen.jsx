import React from 'react'
import useProductDetail from '../Hooks/useProductDetail'
import { useParams } from 'react-router-dom'
import './ProductDetailScreen.css'
import { useCart } from '../context/CartContext'

const ProductDetailScreen = () => {
    const {product_id}= useParams()
    const {product_detail_state, product_detail_loading_state, product_detail_error_state}= useProductDetail(product_id)

    console.log(product_detail_state)

	const {addToCart}=useCart()

  return (
    <div>
        {
            product_detail_loading_state
            ? <span>Cargando...</span>
            : <div className="product-detail">
            <div className="product-image">
              <img
                src={product_detail_state.image_base64}
                alt={product_detail_state.title}
              />
            </div>
            <div className="product-info">
            	<h1 className="product-title">{product_detail_state.title}</h1>
              	<p className="product-description">
                	{product_detail_state.description}
              	</p>
				<p>STOCK:{product_detail_state.stock}</p>
				
              	<span className="product-price">${product_detail_state.price}</span>
             	<button className="buy-button">Comprar</button>
				<button className="cart-button" onClick={() => addToCart(product_detail_state)}>
					Agregar al carrito
				</button>
				
            </div>
          </div>
        }
 
    </div>
  )
}

export default ProductDetailScreen