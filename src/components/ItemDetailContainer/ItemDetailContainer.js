import React from 'react'
import { stockCartas } from '../../data/stock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Spinner } from '../Spinner/Spinner'
import {ItemDetail} from './ItemDetail'

//Creo una función que devuelve un item del stock asincornamente a partir de su itemId
const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(stockCartas.find(item => item.id === Number(itemId))
                )
        }, 2000)
    }
    )
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] =useState(false)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        getItem(itemId)
            .then( res => setItem(res))
            .catch(error => console.log(error))
            .finally(()=> {setLoading(false)})
    }, [itemId])


    return (
        <div>
            {
                loading ? <Spinner/>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
