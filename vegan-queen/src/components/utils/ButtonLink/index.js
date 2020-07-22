import React from "react";
import { Link } from "react-router-dom";

const Boton = ({ adress, image, className }) => {
  return (
    <Link to={adress}>
      <img src={image} alt="logo" className={className} />
    </Link>
  );
};

export default Boton;
