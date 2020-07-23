import React from "react";
import Boton from "../utils/ButtonLink";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Item from "../utils/Item";
import back from "../assets/img/flecha-atras.svg";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import styles from "./styles.module.css";

const MenuBreakfast = ({ Data, order, addingProduct, deletingProduct }) => {
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
            addingProduct={addingProduct}
            deletingProduct={deletingProduct}
          />
        ))}
      </div>
    </Container>
  );
};

export default MenuBreakfast;
