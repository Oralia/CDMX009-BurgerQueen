import React from "react";
import styles from "./style.module.css";
import ItemToOrder from "../utils/ItemToOrder";
//import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

const Order = ({ order }) => {
  const total = order.reduce((sum, item) => sum + item.subtotal, 0);
  //console.log(total)
  return (
    <Container>
      <h3 style={{ color: "white" }}>Confirmar Orden</h3>
      <hr color="white" size="7" />
      {order.map((product) => (
        <ItemToOrder key={product.id} product={product} />
      ))}

      <div>
        <hr color="white" size="7" />
        <strong>Total: ${total}</strong>
      </div>
    </Container>
  );
};

export default Order;
