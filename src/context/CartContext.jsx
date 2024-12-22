import { createContext, useContext, useEffect, useState } from "react";


const CartContext= createContext()

export const useCart=()=> useContext(CartContext)

export const CartProvider= ({children})=>{
    const [cartItems, setCartItems]= useState(()=>{
        const cartLS= localStorage.getItem('cart-items')
        return cartLS ? JSON.parse(cartLS) : []
    })

    useEffect(()=>{
        localStorage.setItem('cart-items', JSON.stringify(cartItems))
    }, [cartItems])


    
    //agregar productos
    const addToCart= (product)=>{
        setCartItems((prevState)=>{
            const product_in_cart= prevState.find((item)=> item._id === product._id)

            if (product_in_cart){
                return prevState.map((item)=>
                item._id === product._id 
                    ? {...item, cantidad: item.cantidad + 1}
                    : item
                )
            }

            //sino agregar el producto al carrito
            return [...prevState, {...product, cantidad: 1}]
        })    
        alert('Se agrego el producto al carrito')
    }

    //eliminar product
    const removeFromCart=(product_id)=>{
        setCartItems((prevState)=> prevState.filter((item)=> item._id !== product_id))
    }

    //limpiar carrito
    const clearCart=()=> setCartItems([])


    //incrementar cantidad de producto
    const incrementQuantity=(id)=>{
        setCartItems((prevState)=>
            prevState.map((item)=> 
            item._id === id ?
            {...item, cantidad: item.cantidad + 1}
            : item)
        )
    }

    //restar cantidad
    const decrementQuantity=(id)=>{
        setCartItems((prevState)=>
            prevState.map((item)=> 
                item._id === id ?
                {...item, cantidad: item.cantidad - 1}
                : item
            )
            .filter((item)=> item.cantidad > 0)
        )   
    }

    
    //calcular total compra
    const calcularTotal=()=>{
        return cartItems.reduce((total, item)=> total + item.price*item.cantidad,0)
    }




    return (
        <CartContext.Provider value={{addToCart, removeFromCart, decrementQuantity,
        incrementQuantity, clearCart, calcularTotal, cartItems}}>
            {children}
        </CartContext.Provider>
    )


}