import React, { useState } from "react";
import Boton from "../utils/ButtonLink";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Item from "../utils/Item";
import back from "../assets/img/flecha-atras.svg";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import styles from "./styles.module.css";
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
    <Container>
      <Navbar />
      <div>
        <Boton image={back} adress="/menu" className={styles.arrow} />
      </div>
      <Row className="d-flex justify-content-center">
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </Row>
      <div>
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
      </div>
      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        Enviar pedido a cocina ->
      </button>
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
    </Container>
  );
};

export default MenuBreakfast;
