import React from "react";
import Boton from "../utils/ButtonLink";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import mburger from "../assets/img/02-menu-burger.svg";
import Navbar from '../Navbar'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>
      <div>
        <Boton image={mburger} adress="/menu-burger" />
      </div>
    </div>
  );
};

export default Menu;
