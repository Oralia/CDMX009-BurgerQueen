import React from "react";
import Boton from "../utils/Buton";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext";

const Waiter = ({date}) => {
  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menumesero} adress="/waiter" />
      </Row>
      <div>Aqui pone sus datos el mesero</div>
      <div>
        <p>Fecha: {date}</p>
      </div>
      
      <div>
      <ButtonNext />
       {/*  <Boton image={next} adress="/Menu" className={styles.arrow} /> */}
      </div>
    </Container>
  );
};

export default Waiter;
