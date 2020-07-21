import React from "react";
import logo from "../assets/img/logo_vegan.png";
import chefAnimate from "../assets/img/chef-animate (1).svg";

import Column from "react-bootstrap/Col";
import Boton from "../utils/ButtonLink";
import styles from "./styles.module.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

const Main = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Column>
          <img src={chefAnimate} alt="Chef amarillo animado" />
        </Column>
      </Row>

      <Row className="d-flex justify-content-center">
        <Boton image={logo} adress="/Role" className={styles.logo} />
      </Row>
    </Container>
  );
};

export default Main;
