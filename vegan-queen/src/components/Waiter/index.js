import React from "react";
import Boton from "../utils/ButtonLink";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import next from "../assets/img/flecha-derecha.svg";
import styles from "./styles.module.css";

const Waiter = () => {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menumesero} adress="/waiter" />
      </Row>
      <div>Aqui pone sus datos el mesero</div>
      <div>
        <Boton image={next} adress="/Menu" className={styles.arrow} />
      </div>
    </Container>
  );
};

export default Waiter;
