import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Item from "../utils/Item";
//import back from "../assets/img/flecha-atras.svg";
import Navbar from "../Navbar";
/* import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container"; */
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const MenuBreakfast = ({
  Data,
  order,
  addingProductToOrder,
  deletingProduct,
  setOrder,
}) => {
  return (
    <Fragment>
       <Navbar />
       <div className={styles.logoUp}>
         <Boton 
          image={mbreakfast} 
          adress="/menu-breakfast"/>
        </div>
        <div>
          <p>Nombre del cliente</p>
          <input type="text" placeholder='cliente'/>
        </div>
        <div>
          <p>Nümero de mesa</p>
          <input type="text" placeholder='mesa'/>
        </div>
        <div>
          <p>Presiona el número de veces necesarias para agregar el producto o aumentar la cantidad</p>
        </div>
        
        <section className={styles.container}>
            
              {Data.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  order={order}
                  /* setOrder={setOrder} */
                  addingProductToOrder={addingProductToOrder}
                  deletingProduct={deletingProduct}
                />
                ))}
        </section>
        <ButtonNext />
        <div>
          <p>Total</p>
          <input type="text" placeholder='Money money'/>
        </div>
        <FontAwesomeIcon 
        icon = { faArrowCircleLeft }
        className={styles.iconProduct}
        />
    </Fragment>


  );
};

export default MenuBreakfast;
