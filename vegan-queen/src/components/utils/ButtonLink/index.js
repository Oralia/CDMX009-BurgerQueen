import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Boton = ({ adress, image, className }) => {
  return (
    <Link className={styles.button} to={adress}>
      <img src={image} alt="logo" className={className} />
    </Link>
  );
};

export default Boton;
