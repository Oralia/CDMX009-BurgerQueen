import React from "react";
import Boton from "../utils/ButtonLink";
import menucocina from "../assets/img/01-menu-cocina.svg";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Navbar from '../Navbar'

const Role = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={menumesero} adress="/waiter" />
      </div>

      <div>
        <Boton image={menucocina} adress="/chef" />
      </div>
    </div>
  );
};

export default Role;
