import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Item from "../utils/Item";
//import back from "../assets/img/flecha-atras.svg";
import Navbar from "../Navbar";
/* import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container"; */
import styles from "./style.module.css";

import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";

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

        <InfoClients />

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
        <InfoTotal />
    </Fragment>


  );
};

export default MenuBreakfast;
