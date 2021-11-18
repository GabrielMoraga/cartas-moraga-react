import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartScreen.css'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)
   
    const small = {
        width: '40%',
        height: 'auto'
      };

      const margen = {
        marginBottom: '20px'
      };

    return (
        <div className="container">

        {
            carrito.length === 0
            ? <>
                <h2 style={margen}>No hay productos agregados</h2>
                <Link to="/" className="btn" >Ir a comprar</Link>
            </>
            : 
                <>
                    <h2 style={margen}>Resumen de compra</h2>
                    <hr/>

                    {// TRANSFORMAR a TABLA CON IMAGEN
                        carrito.map( (prod) => (
                            <>
                            <div key={prod.id} className='detail-container'>
                                
                                <div className='column'>
                                    <img src={prod.img} alt={prod.name} style={small}/>
                                </div>

                                <div className='column'>
                                    <strong>{prod.name}</strong>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio: {prod.price * prod.cantidad}</p>
                                </div>

                                <div className='column'>
                                    <button className="btn"
                                        onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            </>
                        ))
                    }

                    <h3 className="my-3">Precio total: ${calcularTotal()}</h3>
                    <button
                        className="btn"
                        onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                    </button>
                </>
        } 

        </div>
    )
}
