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
  deletingProductToOrder,
}) => {
  const total= order.reduce ((sum, item)=>sum + item.subtotal,0)
 
  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton 
        image={mbreakfast} 
        adress="/menu-breakfast"
        />
      </div>

      <InfoClients />

      <section className={styles.container}>
        {Data.map((product) => (
          <Item
            key={product.id}
            product={product}
           /*  order={order} */
            /* setOrder={setOrder} */
            addingProductToOrder={addingProductToOrder}
            deletingProductToOrder={deletingProductToOrder}
          />
        ))}
      </section>
      <InfoTotal 
      total={total}
      />
    </Fragment>
  );
};

export default MenuBreakfast;
