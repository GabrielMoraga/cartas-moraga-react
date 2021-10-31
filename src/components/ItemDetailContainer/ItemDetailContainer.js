import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { Spinner } from '../Spinner/Spinner'
import {ItemDetail} from './ItemDetail'
import { UIContext } from '../../context/UIContext'
import { getFiresotre } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {loading, setLoading} =useContext(UIContext); // Esta repetido en ItemListContainer poner en un Context (custom Provider)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const bd = getFiresotre();
        const productos = bd.collection('productos');
        const item = productos.doc(itemId);

        item.get()
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

    }, [itemId, setLoading])


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
