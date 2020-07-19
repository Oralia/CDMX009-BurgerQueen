import React from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/ButtonLink";
import Navbar from '../Navbar'

const Orders = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={menucocina} adress="/orders" />
      </div>

      <div>Aqui van las Órdenes</div>
    </div>
  );
};

export default Orders;
