import { stockCartas } from "../data/stock";  
  
//Creo una función con comportamiento asincronico (con setTimeout) para pedir datos
//Esta función me envía una promesa
export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(stockCartas)
        }, 2000)
    })
};
