import React from 'react'
import { useCart } from '../context/CartContext'
import './CartScreen.css'

export const CartScreen = () => {
    const {
        cartItems,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calcularTotal,
        clearCart
    }= useCart()

  return (
    <div className='cart-container'>

        <h2>Carrito de compras</h2>
        {cartItems.length === 0 ? (
            <p>El carrito esta vacio</p>
        ):(
            <div className='cart'>
                <div className='cart-products'>
                {cartItems.map((item)=>(
                    <div key={item._id} className='cart-product-info'>
                        <img src={item.image_base64} alt="" />
                        <h4>{item.title}</h4>
                        <p>Precio: ${item.price}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <div className='cart-buttons'>
                            <button onClick={() => decrementQuantity(item._id)} className='button'>-</button>
                            <button onClick={() => incrementQuantity(item._id)} className='button'>+</button>
                            <button onClick={() => removeFromCart(item._id)} className='delete-button'>Eliminar</button>
                        </div>
                    </div>
                ))} 
                </div>
                <div className='cart-buy-info'>
                    <p>Subtotal</p>
                    <p>Costo del envio</p>
                    <h3>Total: ${calcularTotal()}</h3>
                    <button className='finalizar-compra'>Finalizar Compra</button>
                    <button className='vaciar-carrito' onClick={clearCart}>Vaciar Carrito</button>
                </div>
            </div>
        )}
    </div>
  )
}
