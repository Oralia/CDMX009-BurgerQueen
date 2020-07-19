import React from "react";
import Boton from "../utils/ButtonLink";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import Navbar from '../Navbar'

const MenuBreakfast = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>

      <div>Aqui se debe mostrar el menu para el desayuno</div>
    </div>
  );
};

export default MenuBreakfast;
