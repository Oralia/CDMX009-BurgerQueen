import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from '../Navbar'
import mburger from "../assets/img/02-menu-burger.svg";

const MenuBurger = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={mburger} adress="/menu-burger" />
      </div>

      <div>Aqui se debe mostrar el menu de Hamburgesas</div>
    </div>
  );
};

export default MenuBurger;
