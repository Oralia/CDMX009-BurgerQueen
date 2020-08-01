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
import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";

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
      <InfoClients />
        <section className={styles.container}>
          <strong>HAMBURGUESAS</strong>
          <br/>
          <div class={styles.menuBurger}>
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

            <div className={styles.genericCont}>
               <p>2.Ingrediente</p>
               <div className={styles.containerIngredients}>
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
          </div>

          <div class={styles.bebidasAccom}>

            <div className={styles.genericCont}>
              <p>BEBIDAS</p>
              <div className={styles.containerDrinks}>
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
            </div>

            <div className={styles.genericCont}>
              <p>ACOMPAÑAMIENTOS</p>
              <div className={styles.containerAccompaniments}>
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
            </div>

            
            
          </div>
        </section>
        <InfoTotal />
    </Fragment>
  );
};

export default MenuBurger;
