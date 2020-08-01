import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import mburger from "../assets/img/02-menu-burger.svg";
import Item from "../utils/Item";
// import back from "../assets/img/flecha-atras.svg";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/Row";
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const MenuBurger = ({ 
  dataHamburger,
  dataIngredients,
  dataExtras,
  dataDrinks,
  dataAccompaniments,
  order, 
  addingProduct, 
  deletingProduct 
}) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton 
          image={mburger} 
          adress="/menu-burger"/>
      </div>
      <div>
          <p>Nombre del cliente</p>
          <input type="text" placeholder='cliente'/>
        </div>
        <div>
          <p>Nümero de mesa</p>
          <input type="text" placeholder='mesa'/>
        </div>
        <p>Presiona el número de veces necesarias para agregar el producto o aumentar la cantidad</p>
        <section className={styles.container}>
          <p>HAMBURGUESAS</p>
          <div className={styles.containerHamburguer}>
            <p>1.Tipo</p>
            {dataHamburger.map((product) => (
              <Item
                key={product.id}
                product={product}
                /* order={order} */
                addingProduct={addingProduct}
                deletingProduct={deletingProduct}
              />
            ))}
          </div>
          <div className={styles.containerIngredients}>
          <p>2.Ingrediente</p>
            {dataIngredients.map((product) => (
              <Item
                key={product.id}
                product={product}
                /* order={order} */
                addingProduct={addingProduct}
                deletingProduct={deletingProduct}
              />
            ))}
          </div>
          <div className={styles.containerExtras}>
          <p>3.Extra</p>
            {dataExtras.map((product) => (
              <Item
                key={product.id}
                product={product}
                /* order={order} */
                addingProduct={addingProduct}
                deletingProduct={deletingProduct}
              />
            ))}
          </div>
          <div className={styles.containerDrinks}>
          <p>BEBIDAS</p>
            {dataDrinks.map((product) => (
              <Item
                key={product.id}
                product={product}
                /* order={order} */
                addingProduct={addingProduct}
                deletingProduct={deletingProduct}
              />
            ))}
          </div>
          <div className={styles.containerAccompaniments}>
          <p>ACOMPAÑAMIENTOS</p>
            {dataAccompaniments.map((product) => (
              <Item
                key={product.id}
                product={product}
                /* order={order} */
                addingProduct={addingProduct}
                deletingProduct={deletingProduct}
              />
            ))}
          </div>
         
    
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

export default MenuBurger;
