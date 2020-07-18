import React from 'react'
import menuBreakfast from '../../asset/img/02-menu-desayuno.svg'
import Item from './Item'

const MenuBreakfast = ({Data}) => {
    return (
        <div>
            <img src={ menuBreakfast } alt="Menú desayuno"/>
            <p>Nombre cliente</p>
            <input type="text" name="" id="1" placeholder='nombre cliente'/>
            <p>Número de mesa</p>
            <input type="text" name="" id="2" placeholder='número de mesa'/>
            <p>Presione según corresponda para aumentar o disminuir el número de productos</p>
            {Data.map(product=>
                <Item
                key={product.id}
                product={product} />
                )}
            <button>Enviar pedido a cocina</button>
            <input type="text" name="" id="3" placeholder='Total'/>
            <button>Icono regresar</button>

        </div>
    )
}

export default MenuBreakfast
