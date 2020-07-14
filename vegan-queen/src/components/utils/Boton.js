import React from 'react';
import './Boton.css'

let Boton =({texto,estilo,funcion})=>{
    return(
        <button className={estilo} onClick={()=>funcion("Hamburguesas de carne fa horrible fuchi")}>
            {texto}
        </button>
    )
}
export default Boton