import React from 'react'

const Item = ({product}) => {
    return (
        <div>
            <span>Imagen</span>
    <h3>{product.nameProduct}</h3>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default Item
