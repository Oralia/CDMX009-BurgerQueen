import React from 'react'
import menuBurger from '../asset/img/02-menu-burger.svg'
import Contador from './Contador'

const MenuBurger = () => {

    const sendOrder = () => {
        console.log('Probando el click')
    }
    return (
        <div>
            <img src={ menuBurger } alt="Menú desayuno"/>
            <p>Nombre cliente</p>
            <input type="text" name="" id="1" placeholder='nombre cliente'/>
            <p>Número de mesa</p>
            <input type="text" name="" id="2" placeholder='número de mesa'/>
            <p>Presione según corresponda para aumentar o disminuir el número de productos</p>
            <Contador />
            
            {/* <button onClick={ sendOrder }>Enviar pedido a cocina</button> */}
            <button onClick={ () => sendOrder() }>Enviar pedido a cocina</button>
            <input type="text" name="" id="3" placeholder='Total'/>
            <button>Icono regresar</button>
        </div>
    )
}

export default MenuBurger
