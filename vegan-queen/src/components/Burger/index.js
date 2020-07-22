import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from "../Navbar";
import mburger from "../assets/img/02-menu-burger.svg";
import Item from "../utils/Item"
import back from "../assets/img/flecha-atras.svg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";

const MenuBurger = ({Data}) => {
  return (
    <Container>
      <Navbar />
      <div>
        <Boton image={back} adress="/menu" className={styles.arrow} />
      </div>

      <Row className="d-flex justify-content-center">
        <Boton image={mburger} adress="/menu-burger" />
      </Row>

      <div>Aqui se debe mostrar el menu de Hamburgesas</div>

      <div>
        {Data.map(product =>
          <Item
          key = {product.id}
          product = {product}/>
          )}
      </div>
    </Container>
  );
};

export default MenuBurger;
