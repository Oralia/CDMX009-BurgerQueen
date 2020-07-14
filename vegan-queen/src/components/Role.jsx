import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import chef from '../asset/img/01-menu-cocina.svg'
import waiter from '../asset/img/01-menu-mesero.svg'


const Role = () => {
    return (
        <Fragment>
            <Link to = '/Waiter'>
                <img src={ waiter } 
                alt="Pantalla"/>
            </Link>
            <Link to = '/Chef'>
                <img src={ chef } alt="Menú mesero"/>
            </Link>
        </Fragment>
    )
}

export default Role
