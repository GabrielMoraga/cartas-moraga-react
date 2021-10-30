import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)
   
    const small = {
        width: '10%',
        height: 'auto'
      };

    return (
        <div className="container my-5">

        {
            carrito.length === 0
            ? <>
                <h2>No hay productos agregados</h2>
                <Link to="/" className="btn">Ir a comprar</Link>
            </>
            :
                <>
                    <h2>Resumen de compra</h2>
                    <hr/>

                    {// TRANSFORMAR a TABLA CON IMAGEN
                        carrito.map( (prod) => (
                            <div>
                                <h4>{prod.name}</h4>
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio: {prod.price * prod.cantidad}</p>
                                <img src={prod.img} alt={prod.name} style={small}/>

                                <button className="btn" onClick={() => removeItem(prod.id)}>
                                    <BsFillTrashFill/>
                                </button>
                            </div>
                        ))
                    }

                    <hr/>
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
