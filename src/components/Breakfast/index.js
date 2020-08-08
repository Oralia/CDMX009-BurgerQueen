import React, { Fragment, useState } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Item from "../utils/Item";
import Navbar from "../Navbar";
import styles from "./style.module.css";
import Modal from "react-modal";
import Order from "../Order/Order.js";
import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";

Modal.setAppElement("#root");

const MenuBreakfast = ({
  Data,
  order,
  addingProductToOrder,
  deletingProductToOrder,
  setOrder,
}) => {
  const total = order.reduce((sum, item) => sum + item.subtotal, 0);

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
      <InfoTotal total={total} />
      <div className={styles.contentButtonNext}>
        <button
          className={styles.buttonNext}
          onClick={() => setModalIsOpen(true)}
        >
          Enviar pedido a cocina
        </button>
      </div>

      <Modal className={styles.Modal} isOpen={modalIsOpen}>
        <h2 style={{ color: "white" }}>Confirmar Orden</h2>
        <Order order={order} />
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

/*<Order order={order} />*/
