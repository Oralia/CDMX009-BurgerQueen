import React, { Fragment, useState } from "react";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import mburger from "../assets/img/02-menu-burger.svg";
import Item from "../utils/Item";
import styles from "./style.module.css";
/* import ButtonNext from "../utils/ButtonNext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons' */
import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";

const MenuBurger = ({
  dataHamburger,
  dataIngredients,
  dataExtras,
  dataDrinks,
  dataAccompaniments,
  order,
  addingProductToOrder,
  deletingProductToOrder,
}) => {
  const [confBurger, setConfBurger] = useState({
    tipo: undefined,
    ingrediente: undefined,
    extra: undefined,
  })
  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton image={mburger} adress="/menu-burger" />
      </div>
      <InfoClients />
      <section className={styles.container}>
        <strong>HAMBURGUESAS</strong>
        <br />
        <div className={styles.menuBurger}>
          <div className={styles.containerHamburguer}>
            <p>1.Tipo</p>
            {dataHamburger.map((product) => (
              <Item
                key={product.id}
                product={product}
                order={order}
                addingProductToOrder={(product) => {
                  setConfBurger({
                    ...confBurger,
                    tipo: product,
                  })
                  // addingProductToOrder(product)
                }}
                deletingProductToOrder={deletingProductToOrder}
              />
            ))}
          </div>
          
          {confBurger.tipo && (
            <>
              <div className={styles.genericCont}>
                <p>2.Ingrediente</p>
                <div className={styles.containerIngredients}>
                  {dataIngredients.map((product) => (
                    <Item
                      key={product.id}
                      product={product}
                      order={order}
                      addingProductToOrder={(product) => {
                        setConfBurger({
                          ...confBurger,
                        ingrediente: product,
                        })
                        // addingProductToOrder(product)
                      }}
                      deletingProductToOrder={deletingProductToOrder}
                    />
                  ))}
                </div>
              </div>
              {confBurger.ingrediente && (
              <div className={styles.containerExtras}>
                <p>3.Extra</p>
                {dataExtras.map((product) => (
                  <Item
                    key={product.id}
                    product={product}
                    order={order}
                    addingProductToOrder={addingProductToOrder}
                    deletingProductToOrder={deletingProductToOrder}
                  />
                ))}
              </div>)}
            </>
          )}
        </div>

        <div className={styles.bebidasAccom}>
          <div className={styles.genericCont}>
            <p>BEBIDAS</p>
            <div className={styles.containerDrinks}>
              {dataDrinks.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  order={order}
                  addingProductToOrder={addingProductToOrder}
                  deletingProductToOrder={deletingProductToOrder}
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
                  order={order}
                  addingProductToOrder={addingProductToOrder}
                  deletingProductToOrder={deletingProductToOrder}
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
