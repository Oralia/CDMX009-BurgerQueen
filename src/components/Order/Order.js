import React from "react";
import Item from "../utils/Item";
import Container from "react-bootstrap/esm/Container";

const Order = ({ order, product }) => {
  const total = order.reduce((sum, item) => sum + item.subtotal, 0);
  return (
    <Container>
      <p> Tu orden </p>
      {order.map((product) => (
        <Item key={product.id} product={product} />
      ))}
      <p>Total: ${total}</p>
    </Container>
  );
};

export default Order;
