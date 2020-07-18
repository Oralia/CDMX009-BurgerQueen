import React from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import menumesero from "../img/01-menu-mesero.svg";

const Waiter = () => {
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>
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
