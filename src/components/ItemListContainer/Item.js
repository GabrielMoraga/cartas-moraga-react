import React from 'react'
import './Item.css'

export const Item = ({id, name, type, description, price, power, defence, img,
   cardHover}) => {

  return (
        <figure className={`${cardHover ? "card" : "card-non-hover"} card--${type}`}>

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
    )
}