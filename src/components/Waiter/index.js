import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Navbar from "../Navbar";
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext";

const Waiter = ({date}) => {
  return (
    <Fragment>
      <Navbar />
        <div className={styles.containerPrincipal}>
        
          <div>
            <Boton image={menumesero} adress="/waiter" />
          </div>
          <div className={styles.containerEmployee}>
              <div>
                <p>Nombre</p>
                <input type="text" name="" id=""/>
              </div>
              <div>
                <ButtonNext
                  adress="/Menu" 
                  className={styles.arrow}/>
              </div>
              <p>Fecha: {date}</p>
            </div>
        </div>    
    </Fragment>
  );
};

export default Waiter;
