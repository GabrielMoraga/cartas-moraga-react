import React from "react";
import './NavBar.css';
import { CartWidget } from "./CartWidget";

const NavBar = () => {
    return(
    <header className='nav-container'>
        <h1 style={{border:'solid 2px'}}>Cartas-Locas</h1>
        <a href="#">Elemento 1</a>
        <a href="#">Elemento 2</a>
        <a href="#">Elemento 3</a>
        
        <CartWidget/>
    </header>
    )
};


export default NavBar;