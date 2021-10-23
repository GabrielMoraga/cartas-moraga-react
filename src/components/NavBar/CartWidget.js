import React from 'react'
import { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { calcularCantidad} = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <FaShoppingCart className='cart'/>
            <span className='badge'>{calcularCantidad()}</span>
        </div>
    )
}


