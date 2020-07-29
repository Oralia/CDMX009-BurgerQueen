import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from "../Navbar";
import menucocina from "../assets/img/01-menu-cocina.svg";
import style from "./style.module.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import ButtonNext from "../utils/ButtonNext"

const Chef = function ({ date }) {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/chef" />
      </Row>
      <div>Aqui van pone sus datos el chef</div>
      <p>Fecha: {date}</p>
      <ButtonNext />
    </Container>
  );
};

export default Chef;
