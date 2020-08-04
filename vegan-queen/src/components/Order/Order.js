import React from "react";
import styles from "./styles.moodule.css";
import Item from "../utils/Item";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

const Order = ({ order }) => {
  return (
    <Container>
      <div className="order">Tu orden</div>

      {order.items.map((product) => (
        <Item key={product.id} product={product} order={order} />
      ))}
    </Container>
  );
};

export default Order;

/*{order.length === 0 ? (
        <p>Aun no hay pedidos</p>
      ) : (
        order.map((product) => <Item key={product.id} product={product} />)
      )} */
