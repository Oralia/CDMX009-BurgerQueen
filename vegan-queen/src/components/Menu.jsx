import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import menuBreakfast from '../asset/img/02-menu-desayuno.svg'
import menuBurger from '../asset/img/02-menu-burger.svg'


const Menu = () => {
    return (
        <Fragment>
            <h6>Nombre mesero</h6>
            <h6>Notificación de órden lista</h6>
            <Link to = '/menu-breakfast'>
                <img src={ menuBreakfast } 
                alt="Menú desayuno"/>
            </Link>
            <Link to = '/menu-burger'>
                <img src={ menuBurger } alt="Menú Hamburguesa"/>
            </Link>
            {/* <button> <img src={ menuBurger } alt="Menú Hamburguesa"/> </button> */}
        </Fragment>
    )
}

export default Menu
