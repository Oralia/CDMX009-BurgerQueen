import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from "../Navbar";
import menucocina from "../assets/img/01-menu-cocina.svg";
import style from "./style.module.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import next from "../assets/img/flecha-derecha.svg";

const Chef = function ({ date }) {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/chef" />
        <p>Fecha: {date}</p>
      </Row>
      <div>Aqui van pone sus datos el chef</div>
      <Boton image={next} adress="/orders" className={style.arrow} />
    </Container>
  );
};

export default Chef;
