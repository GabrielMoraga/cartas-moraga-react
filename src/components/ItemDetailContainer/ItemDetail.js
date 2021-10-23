import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';



export const ItemDetail = ({id, name, type, description, price, power, defence, img, stock }) => {

    const {addToCart, } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)


    const handleAdd = () => {
        const newItem = {
            id,
            name,
            price,
            type,
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return (
        <div className='detail-container'>
          

            <div className='column'>
                <figure className={`card-non-hover card--${type}`}>

                    <h3>ID: {id}</h3>
                    <h1 className="card__name">{name}</h1>

                    <div className="card__image-container">
                    <img src={img} alt={name} className="card__image"/>   
                    </div>

                    <figcaption className="card__caption">
                        
                    <h3 className="card__type">
                    {type}
                    </h3>

                    <table className="card__stats">
                    <tbody><tr>
                        <th>Price</th>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <th>Power</th>
                        <td>{power}</td>
                    </tr>
                    
                    <tr>
                        <th>Defense</th>
                        <td>{defence}</td>
                    </tr>
                    </tbody></table>

                    </figcaption>
                </figure>
            </div>

            <div className='column'>
                <h2 className = "product-title">{name}</h2>
                <p>Precio ${price}</p>

                <div className = "product-detail">
                    <h2>Detalle: </h2>
                    <p>{description}</p>
                    <ul>
                    <li>Type: <span>{type}</span></li>
                    <li>Available: <span>in stock</span></li>
                    <li>Author: <span>GMS</span></li>
                    </ul>
                </div>

                <div className = "purchase-info">
                    <ItemCount cantidad={cantidad} setCantidad={setCantidad} max={stock}/>
                    <button type = "button" className = "btn" onClick={handleAdd}>
                    Agregar <FaShoppingCart/>
                    </button>
                </div>
            </div>
        </div>
    )
}
