import React from 'react'
import {Item} from './Item'

export const ItemList = ({items=[]}) => {
    return (
        <div>
            {/*Mapeo cada item del array items usando la función map*/}
            {items.map((item) => <Item key={item.id} {...item}/>)} 
        </div>
    )
}