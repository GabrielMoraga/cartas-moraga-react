import React from 'react'
import './ItemCount.css'

export const ItemCount = ({cantidad, setCantidad, max}) => {

    const handleRestar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }
    
    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)    
        }
    }

    return (
        <div >
            <button className='button-circle minus' onClick={handleRestar}>
                -
            </button>  

            <span className='contador'>{cantidad}</span>

            <button className='button-circle plus' onClick={handleSumar}>
                +
            </button>

        </div>
    )
}
