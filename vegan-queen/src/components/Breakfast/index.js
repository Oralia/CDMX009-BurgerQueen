import React, { useState, Fragment } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Item from "../utils/Item";
import Navbar from "../Navbar";
import styles from "./style.module.css";
import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";
import Modal from "react-modal";
import Order from "../Order/Order.js";

Modal.setAppElement("#root");

const MenuBreakfast = ({
  Data,
  order,
  addingProductToOrder,
  deletingProductToOrder,
  setOrder,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Fragment>
      <Navbar />

      <div className={styles.logoUp}>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>

      <InfoClients />

      <section className={styles.container}>
        {Data.map((product) => (
          <Item
            key={product.id}
            product={product}
            order={order}
            setOrder={setOrder}
            addingProductToOrder={addingProductToOrder}
            deletingProductToOrder={deletingProductToOrder}
          />
        ))}
      </section>
      <InfoTotal />

      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        Enviar pedido a cocina
      </button>
      <Modal className={styles.Modal} isOpen={modalIsOpen}>
        <h2 style={{ color: "white" }}>Confirmar Orden</h2>
        <Order />

        <button
          className={styles.buttonCancel}
          onClick={() => setModalIsOpen(false)}
        >
          Cancelar
        </button>
        <button
          className={styles.buttonCancel}
          onClick={() => setModalIsOpen(false)}
        >
          Enviar a Cocina
        </button>
      </Modal>
    </Fragment>
  );
};

export default MenuBreakfast;

///>

/* <div>
        <Boton image={back} adress="/menu" className={styles.arrow} />
      </div>*/
