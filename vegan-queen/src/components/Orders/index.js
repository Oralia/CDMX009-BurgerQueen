import React from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

const Orders = ({dateAndTime}) => {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/orders" />
          <p>Fecha y hora: {dateAndTime}</p>
      </Row>

      <div>Aqui van las Órdenes</div>
    </Container>
  );
};

export default Orders;
