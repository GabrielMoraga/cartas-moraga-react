import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Item } from '../ItemListContainer/Item';
import { UIContext } from '../../context/UIContext';

export const ItemDetail = ({id, name, type, description, price, power, defense, img, stock}) => {

    const {addToCart, isInCart} = useContext(CartContext)
    const {cardHover, setCardHover} = useContext(UIContext)

    const [cantidad, setCantidad] = useState(0)


    setCardHover(false)

    const handleAdd = () => {
        const newItem = {
            id,
            name,
            price,
            type,
            img,
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return (
        <div className='detail-container'>
          

            <div className='column'>
                <Item
                id={id}
                name={name}
                type={type}
                description={description}
                price={price}
                power={power}
                defense={defense}
                img={img}
                stock={stock}
                cardHover={cardHover}/>
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
              
                { isInCart(id) 
                    ? <Link to="/cart" className = "btn">Terminar mi compra</Link>
                    :
                    <div className = "purchase-info">
                        <ItemCount cantidad={cantidad} setCantidad={setCantidad} max={stock}/>
                        <button type = "button" className = "btn" onClick={handleAdd}>
                        Agregar <FaShoppingCart/>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
