import React from 'react'

const Item = ({product}) => {
    return (
        <div>
            <h5>{product.product}</h5>
            <h6>${product.cost}</h6>
            <img src={product.image} alt=""/>
            
            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default Item
