import React from "react";
import Boton from "../utils/ButtonLink";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import mburger from "../assets/img/02-menu-burger.svg";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Menu = () => {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </Row>

      <Row className="d-flex justify-content-center">
        <Boton image={mburger} adress="/menu-burger" />
      </Row>
    </Container>
  );
};

export default Menu;
