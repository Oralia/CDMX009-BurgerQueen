import React, { Fragment, useState } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import ItemProductCatalog from "../utils/ItemProductCatalog";
import Navbar from "../Navbar";
import styles from "./style.module.css";
import Modal from "react-modal";
import Order from "../Order/Order.js";

import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";

import ShowWaiterName from "../utils/ShowWaiterName";
import ShowName from "../utils/ShowName";

Modal.setAppElement("#root");

const Breakfast = ({
  Data,
  order,
  addingProductToOrder,
  deletingProductToOrder,
  setOrder,
}) => {
  const total = order.reduce((sum, item) => sum + item.subtotal, 0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [userName, setUserName] = useState();
  const [waiterName, setWaiterName] = useState();

  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>

      <InfoClients setUserName={setUserName} />

      <section className={styles.container}>
        {Data.map((product) => (
          <ItemProductCatalog
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
      <div className={styles.modalContainer}>
        <Modal className={styles.Modal} isOpen={modalIsOpen}>
          <div>
            <ShowWaiterName waiterName={waiterName} />
            <ShowName userName={userName} />
            <Order order={order} />
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.buttonNext}
              onClick={() => setModalIsOpen(false)}
            >
              Cancelar
            </button>
            <button
              className={styles.buttonNext}
              onClick={() => setModalIsOpen(false)}
            >
              Enviar a Cocina
            </button>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Breakfast;
