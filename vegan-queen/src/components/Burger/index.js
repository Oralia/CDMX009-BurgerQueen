import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import mburger from "../assets/img/02-menu-burger.svg";
import Item from "../utils/Item";
// import back from "../assets/img/flecha-atras.svg";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/Row";
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext";

const MenuBurger = ({ 
  Data, 
  order, 
  addingProduct, 
  deletingProduct 
}) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton 
          image={mburger} 
          adress="/menu-burger"/>
      </div>
      <div>
          <p>Nombre del cliente</p>
          <input type="text" placeholder='cliente'/>
        </div>
        <div>
          <p>Nümero de mesa</p>
          <input type="text" placeholder='mesa'/>
        </div>
        <div className={styles.container}>
          <p>Presiona el número de veces necesarias para agregar el producto o aumentar la cantidad</p>
        </div>

        <section className={styles.container}>
          {Data.map((product) => (
            <Item
              key={product.id}
              product={product}
              order={order}
              addingProduct={addingProduct}
              deletingProduct={deletingProduct}
            />
          ))}
        </section>
        <ButtonNext />
        <div>
          <p>Total</p>
          <input type="text" placeholder='Money money'/>
        </div>
    </Fragment>

   /*  <Container>
      <Navbar />
      

      <Row className="d-flex justify-content-center">
        <Boton image={mburger} adress="/menu-burger" />
      </Row>

      <div>
        {Data.map((product) => (
          <Item
            key={product.id}
            product={product}
            order={order}
            addingProduct={addingProduct}
            deletingProduct={deletingProduct}
          />
        ))}
      </div>
    </Container> */
  );
};

export default MenuBurger;
