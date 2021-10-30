import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development';
import { UIContext } from '../../context/UIContext';
import {Item} from './Item'

export const ItemList = ({items=[]}) => {

    const {cardHover, setCardHover} = useContext(UIContext);

    setCardHover(true)
    return (
        <div>
            {/*Mapeo cada item del array items usando la función map*/}
            {items.map((item) => 
            <Link to={`/detail/${item.id}`}>
            <Item key={item.id} {...item} cardHover={cardHover} setCardHover={setCardHover}/>
            </Link>
            )} 
        </div>
    )
}