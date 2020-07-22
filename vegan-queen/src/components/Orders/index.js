import React from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/ButtonLink";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

const Orders = () => {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/orders" />
      </Row>

      <div>Aqui van las Órdenes</div>
    </Container>
  );
};

export default Orders;
