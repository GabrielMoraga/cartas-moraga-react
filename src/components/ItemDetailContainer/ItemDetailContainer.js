import React from 'react'
import { stockCartas } from '../../data/stock'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { Spinner } from '../Spinner/Spinner'
import {ItemDetail} from './ItemDetail'
import { UIContext } from '../../context/UIContext'

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
    const {loading, setLoading} =useContext(UIContext); // Esta repetido en ItemListContainer poner en un Context (custom Provider)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        getItem(itemId)
            .then( res => setItem(res))
            .catch(error => console.log(error))
            .finally(()=> {setLoading(false)})
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
