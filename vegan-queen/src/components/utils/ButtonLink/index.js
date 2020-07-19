import React from "react";
import { Link } from "react-router-dom";

const Boton = ({adress, image}) => {
  return (
    <Link to = {adress}>
      <img src = {image} />
    </Link>
  );
};

export default Boton;
