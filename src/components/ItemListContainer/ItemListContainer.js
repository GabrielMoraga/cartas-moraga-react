//Este componente consume los datos asincronamente
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { UIContext } from '../../context/UIContext';
import { getFiresotre } from '../../firebase/config';
import { Spinner } from '../Spinner/Spinner';
import { ItemList } from './ItemList';

// Consumo de datos

const ItemListContainer = ({title}) => {

    const [items, setItems] = useState([]);
    const {loading, setLoading} = useContext(UIContext); // Menejo del estado para cargando../spinning

    const {categoryId} = useParams()

    useEffect(()=>{
        
        setLoading(true)
        //Pido los productos cuando se monta el componente
        const db = getFiresotre();
        const productos = categoryId 
            ? db.collection('productos').where('type','==', categoryId)
            : db.collection('productos')

            productos.get()
            .then(res => {

                const newItems = res.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })

                setItems(newItems)
            })
            .catch(err => console.log(err))
            .finally(() => {setLoading(false)})
            
    }, [categoryId, setLoading]);


    return (
        <>
            
            <h1>{title}</h1>
                
            {loading ? <Spinner/>
            : <ItemList items={items}/>
            }   
        </>
    )

}

export default ItemListContainer;