import React from "react";
import Boton from "../utils/ButtonLink";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Navbar from '../Navbar'

const Waiter = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={menumesero} />
      </div>
      <div>Aqui pone sus datos el mesero</div>
      <div>
        <Boton
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_M89SuIvsQ-4fSUojfXClKalxp-pf_vNbw&usqp=CAU"
          adress="/Menu"
        />
      </div>
    </div>
  );
};

export default Waiter;
