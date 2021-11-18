import React, { useContext } from 'react'
import { UIContext } from '../../context/UIContext';
import './Item.css'


export const Item = ({id, name, type, description, price, power, defense, img}) => {

  const {cardHover} = useContext(UIContext);

  return (
        <figure className={`${cardHover ? "card" : "card-non-hover"} card--${type}`}>

            <p className='.card__id'>ID: {id}</p>
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
                <th>Precio</th>
                <td>${price}</td>
              </tr>
              <tr>
                <th>Poder</th>
                <td>{power}</td>
              </tr>
              
              <tr>
                <th>Defensa</th>
                <td>{defense}</td>
              </tr>
            </tbody></table>
            
          </figcaption>
        </figure>
    )
}