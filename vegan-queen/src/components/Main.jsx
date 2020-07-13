import React, { Fragment } from 'react'
import logo from '../img/logo_vegan.png'
import chef from '../img/chef-animate (1).svg'
import { Link } from "react-router-dom"
//import '../App.css';

const Main = () => {
    return (
        <Fragment>
            <div>
                <img src={ chef } alt="logotipo vegan burger"/>
            </div>
            <Link to = '/role'>
                <img id='logo' src={ logo } alt=""/>
            </Link>
        </Fragment>
    )
}

export default Main
