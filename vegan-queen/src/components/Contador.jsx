import React, { useState } from 'react'

const Contador = () => {

    const [count, setCount] = useState(0)
    const increase = () => {
        console.log('Click')
        setCount (count + 1)
    }
    const decrease = () => {
        console.log('Click')
        //Evitar número negativos, esto quizá se podría hacer con un ternario, si apreietas este botón aumentas, si aprietas este otro disminuyes
        setCount (count - 1)
    }


    /* const reset = () => {

    } */


    return (
        <div>
            { count }
            <button onClick = { increase }>+</button>
            <button onClick = { () => decrease()}>-</button>
            <button>Reset</button>
        </div>
    )
}

export default Contador
