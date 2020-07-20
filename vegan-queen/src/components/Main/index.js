import React from "react";
import logo from "../assets/img/logo_vegan.png";
import chefAnimate from "../assets/img/chef-animate (1).svg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Button from 'react-bootstrap/Button'
import Boton from "../utils/ButtonLink";
import styles from './styles.module.css'
//import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <Container>
      <Row className = 'justify-content-md-center'>
        <Col>
          {/* <Button variant="outline-primary">Primary</Button>{' '} */}
          <img src={ chefAnimate } alt="Chef amarillo animado" className = {styles.logo}/>
          <Boton 
            image={ logo } 
            adress="/Role"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;