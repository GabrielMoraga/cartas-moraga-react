import React from "react";
import './NavBar.css';
import { CartWidget } from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
    <header className='nav-container'>
        <h1 style={{border:'solid 2px'}}>Cartas-Locas</h1>

        <nav>
            <ul className='menu'>
                <li><NavLink activeClassName='selected' exact to='/'>Inicio</NavLink></li>
                <li><NavLink activeClassName='selected' to='/productos'>Productos</NavLink>
                    <ul className='submenu'>
                        <li><Link to='/productos/normal'>Normal</Link></li>
                        <li><Link to='/productos/ground'>Ground</Link></li>
                        <li><Link to='/productos/water'>Water</Link></li>
                        <li><Link to='/productos/fire'>Fire</Link></li>
                        <li><Link to='/productos/hero'>Hero</Link></li>
                        <li><Link to='/productos/dark'>Dark</Link></li>
                    </ul>
                </li>
                <li><NavLink activeClassName='selected' to='/contacto'>Contacto</NavLink></li>
            </ul>
        </nav>
        
        <CartWidget/>
    </header>
    )
};


export default NavBar;