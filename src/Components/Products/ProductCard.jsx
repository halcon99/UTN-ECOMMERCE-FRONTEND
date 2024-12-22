import React from "react"
import "./ProductCard.css"

const ProductCard = ({product}) => {
    const {image_base64, title, price}= product
  return (
    <div className="product_card">

      	<div className="product_card_image">
        	<img src={image_base64} alt={title} />
     	</div>
		
      	<div className="product_card_info">
			<h3 className="product_card_title">{title}</h3>
			<div className="product_card_price">
				<span>${price}</span>
			</div>
			<p className="product_card_arrives">Llega mañana</p>
      	</div>
    </div>
  )
}

export default ProductCard