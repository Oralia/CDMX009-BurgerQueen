import React from "react";
import Boton from "../utils/ButtonLink";
import exit from "../assets/img/salir.svg";
import menuCocina from "../assets/img/01-menu-cocina.svg";
import menuMesero from "../assets/img/01-menu-mesero.svg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
//import Column from "react-bootstrap/Col";
import styles from './style.module.css'

const Role = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <div className={styles.btnExit}>
        <Boton image={exit} adress="/" />
        </div>
      </Row>
      <Row className="d-flex align-items-center vh-100 justify-content-center justify-content-around">
        <div>
<Boton image={menuMesero} adress="/waiter" />
        </div>
          <div>
          <Boton image={menuCocina} adress="/chef" />
          </div>
      </Row>
    </Container>
  );
};

export default Role;
