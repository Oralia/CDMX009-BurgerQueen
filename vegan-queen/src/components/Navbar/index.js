import React from "react";
import Boton from "../utils/ButtonLink";
import exit from "../assets/img/salir.svg";
import mc from "../assets/img/m-c.svg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
const Navbar = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <Boton image={exit} adress="/" />
        <div>
          <Boton image={mc} adress="/Role" />
        </div>
      </Row>
    </Container>
  );
};

export default Navbar;
