import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from '../Navbar'
import menucocina from "../assets/img/01-menu-cocina.svg";

const Chef = function ({date}) {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={menucocina} adress="/chef" />
      </div>
      <p>Fecha: {date}</p>
      <div>Aqui van pone sus datos el chef</div>
      <Boton
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_M89SuIvsQ-4fSUojfXClKalxp-pf_vNbw&usqp=CAU"
        adress="/orders"
      />
    </div>
  );
};

export default Chef;
