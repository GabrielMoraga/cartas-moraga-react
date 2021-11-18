import React from 'react'
import { Link } from 'react-router-dom'
import {Item} from './Item'

export const ItemList = ({items=[], cardHover}) => {

    return (
        <div>
            {/*Mapeo cada item del array items usando la función map*/}
            {items.map((item) => 
            <Link to={`/detail/${item.id}`}>
            <Item key={item.id} {...item} cardHover={cardHover}/>
            </Link>
            )} 
        </div>
    )
}