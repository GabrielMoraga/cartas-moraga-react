import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)
    
    console.log(carrito)
    console.log(carrito.map((item) => item.cantidad))
 
    const addToCart = (item) => {
      setCarrito([...carrito, item])
    }
    
    /* INTENTO 1: Actualización condicional del carrito
    const addToCart = (item) => {
      if(carrito.some( (prod) => prod.id === item.id)) { 
        const newCart = carrito 
        const index = newCart.findIndex( (prod) => prod.id === item.id)
        newCart[index].cantidad = newCart[index].cantidad + item.cantidad
        console.log(newCart)
        setCarrito(newCart)
        
      } else {
        setCarrito([...carrito, item])
      }
    }
    */

    /* INTENTO 2: Actualización condicional del carrito
    const updateItem = (item) => {
      if(carrito.some( (prod) => prod.id === item.id)) { 
        const newCart = carrito 
        const index = newCart.findIndex( (prod) => prod.id === item.id)
        newCart[index].cantidad = newCart[index].cantidad + item.cantidad
        return newCart
      } else {
        const newCart = [...carrito, item]
        return newCart
      }
    }

    const addToCart = (item) => {
      const newCart = updateItem(item)
      setCarrito( newCart )
    }
    */

    const removeItem = (itemId) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemId)
      setCarrito( newCart )
    }
  
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }

    const calcularTotal = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    const isInCart = (itemId) => {
      return carrito.some( (prod) => prod.id === itemId)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
    useEffect(()=>{
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
  
    return (
        <CartContext.Provider value={ {
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            isInCart,
            calcularTotal
        }}>
            {children}
        </CartContext.Provider>
    )

}
