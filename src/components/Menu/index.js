import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import mburger from "../assets/img/02-menu-burger.svg";
import Navbar from "../Navbar";
/* import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; */
import styles from "./style.module.css";
import UserName from "../utils/UserName/UserName";

const Menu = () => {
  return (
    <Fragment>
      <p> Aqui va el nombre del usuario</p>
      <p>{UserName}</p>
      <Navbar />
      <section className={styles.container}>
        <div>
          <div>
            <Boton image={mbreakfast} adress="/menu-breakfast" />
          </div>
          <br />
          <div>
            <Boton image={mburger} adress="/menu-burger" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Menu;
