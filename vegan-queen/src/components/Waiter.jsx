import React from 'react'
import waiter from '../asset/img/01-menu-mesero.svg'

const Waiter = () => {
    return (
        <div>
             <h6>Nombre mesero</h6>
             <h6>Notificación de órden lista</h6>
             <img src={ waiter } alt="Registro mesero"/>
             <input type="text"/>
             <button>Siguiente</button>
             <input type="date" name="" id=""/>
        </div>
    )
}

export default Waiter
