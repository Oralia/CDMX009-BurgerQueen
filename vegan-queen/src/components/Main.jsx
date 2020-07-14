import React, { Fragment } from 'react'
import logo from '../asset/img/logo_vegan.png'
import chef from '../asset/img/chef-animate (1).svg'
import { Link } from "react-router-dom"
//import '../App.css';
import Boton from './utils/Boton'

const Main = () => {
    let handleImprimir =()=>{
        console.log(3+3)
    }
    let handleBorrar =(elemento)=>{
        elemento?
        console.log("Borrar",elemento):
        console.log("no se puede borrar porque no pasas ningun elemento")
    }
    return (
        <Fragment>
            <Boton texto="Algo" estilo="negro" funcion={handleImprimir} />
            <Boton texto="lindo mundo de colores" estilo="rosa" funcion={handleBorrar}/>
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
