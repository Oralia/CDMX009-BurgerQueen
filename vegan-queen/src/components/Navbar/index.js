import React from "react";
import Boton from "../utils/ButtonLink";
import exit from "../assets/img/salir.svg";
import mc from "../assets/img/m-c.svg";

const Navbar = () => {
  return (
    <div>
      <Boton image={exit} adress="/"/>
      <div>
      <Boton image={mc} adress="/Role"/>
      </div>
    </div>
  );
};

export default Navbar;
