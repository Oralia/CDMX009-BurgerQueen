import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css"

const ButtonNext = (adress) => {
  return (
    <Link to={adress}>
        <button className={styles.buttonNext}>Siguiente</button>
    </Link>
  );
};

export default ButtonNext;
