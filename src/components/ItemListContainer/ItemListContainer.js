//Este componente consume los datos asincronamente
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { pedirProductos } from '../../helpers/pedirProductos';
import { Spinner } from '../Spinner/Spinner';
import { ItemList } from './ItemList';

// Consumo de datos

const ItemListContainer = ({title}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false); // Menejo del estado para cargando../spinning

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(()=>{

        setLoading(true)
        //Pido los productos cuando se monta el componente
        pedirProductos()
            .then((res) => {
                if(categoryId) {
                    setItems(res.filter(prod => prod.type === categoryId))
                } else {
                    setItems(res) // Caundo obtengo la respuesta de la promesa cambio el estado de items al stockCartas
                }
            })
            .catch((err) => console.log(err)) // Capturo el error
            .finally(()=> {
                setLoading(false)
            })

    }, [categoryId]);


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