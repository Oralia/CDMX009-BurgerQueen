import React from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import menucocina from "../img/01-menu-cocina.svg";

const Orders = () => {
<<<<<<< HEAD
    return (
        <div>
            <h6>Nombre cocinero</h6>
            <p>Comanda con la descripción del pedido, número de mesa, fecha, hora,</p>
            <button>Órden lista</button>
        </div>
    )
}
=======
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>
      <div>
        <Boton image={menucocina} adress="/orders" />
      </div>
>>>>>>> b02d9211f157b81de1469065bdd04ee61ed49ce2

      <div>Aqui van las Órdenes</div>
    </div>
  );
};

export default Orders;
