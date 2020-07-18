import React from "react";
import logo from "../assets/img/logo_vegan.png";
import chefAnimate from "../assets/img/chef-animate (1).svg";
import Boton from "../utils/ButtonLink";
//import '../App.css';
//import Boton from './utils/Boton'

const Main = () => {
  return (
    <Container>
        <img src={ chefAnimate } alt="Chef amarillo animado" />
      <Boton image={ logo } adress="/Role" />
    </Container>
  );
};

export default Main;
