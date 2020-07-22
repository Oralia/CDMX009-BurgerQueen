import React from "react";
import Boton from "../utils/ButtonLink";
import exit from "../assets/img/salir.svg";
import menucocina from "../assets/img/01-menu-cocina.svg";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

const Role = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <Boton image={exit} adress="/" />
      </Row>
      <Row className="d-flex justify-content-center">
        <Boton image={menumesero} adress="/waiter" />
      </Row>
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/chef" />
      </Row>
    </Container>
  );
};

export default Role;
