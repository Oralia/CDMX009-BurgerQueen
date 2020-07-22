import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from "../Navbar";
import mburger from "../assets/img/02-menu-burger.svg";
import back from "../assets/img/flecha-atras.svg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";

const MenuBurger = () => {
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
    </Container>
  );
};

export default MenuBurger;
