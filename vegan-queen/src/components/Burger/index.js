import React from "react";
import Boton from "../utils/ButtonLink";
import Navbar from '../Navbar'
import mburger from "../assets/img/02-menu-burger.svg";
import Item from "../utils/Item"

const MenuBurger = ({Data}) => {
  return (
    <div>
      <Navbar />
      <div>
        <Boton image={mburger} adress="/menu-burger" />
      </div>

      <div>Aqui se debe mostrar el menu de Hamburgesas</div>

      <div>
        {Data.map(product =>
          <Item
          key = {product.id}
          product = {product}/>
          )}
      </div>

    </div>
  );
};

export default MenuBurger;
