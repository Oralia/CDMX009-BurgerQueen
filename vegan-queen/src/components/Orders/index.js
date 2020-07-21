import React from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/ButtonLink";
import Navbar from '../Navbar'

const Orders = ({dateAndTime}) => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={menucocina} adress="/orders" />
      </div>
  <p>Fecha y hora: {dateAndTime}</p>

      <div>Aqui van las Órdenes</div>
    </div>
  );
};

export default Orders;
