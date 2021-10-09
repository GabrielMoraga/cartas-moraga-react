//Este componente consume los datos asincronamente
import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos';
import { Spinner } from '../Spinner/Spinner';
import { ItemList } from './ItemList';

// Consumo de datos

const ItemListContainer = ({title}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false); // Menejo del estado para cargando../spinning

    useEffect(()=>{

        setLoading(true)
        //Pido los productos cuando se monta el componente
        pedirProductos()
            .then((res) => {
                setItems(res) // Caundo obtengo la respuesta de la promesa cambio el estado de items al stockCartas
            })
            .catch((err) => console.log(err)) // Capturo el error
            .finally(()=> {
                setLoading(false)
            })

    }, []);


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