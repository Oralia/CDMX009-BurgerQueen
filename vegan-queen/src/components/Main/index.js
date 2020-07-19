import React from "react";
import logo from "../assets/img/logo_vegan.png";
import chefAnimate from "../assets/img/chef-animate (1).svg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Column from 'react-bootstrap/Container'
import Boton from "../utils/ButtonLink";
import styles from './styles.modules.css'

const Main = () => {
  return (
    <Container>
      <Row className = 'justify-content-md-center'>
        <Column>
          <img src={ chefAnimate } alt="Chef amarillo animado" className = {styles.logo}/>
          <Boton 
            image={ logo } 
            adress="/Role"
          />
        </Column>
      </Row>
    </Container>
  );
};

export default Main;