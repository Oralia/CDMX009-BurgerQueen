import React from "react";
import styles from "./style.module.css";
import Item from "../utils/Item";
//import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";



const Order = ({ 
  order, 
  product,
  //total
 }) => {

  const total= order.reduce ((sum, item)=>sum + item.subtotal,0)
  //console.log(total)
  return (
    <Container>
      <p> Tu orden </p>
      {order.map((product) => (
        <Item 
          key={product.id} 
          product={product} 
          /* {product.productName} */
        />
      ))}
      <p>Total: ${total}</p>
    </Container>
  );
};

export default Order;

/*{order.length === 0 ? (
        <p>Aun no hay pedidos</p>
      ) : (
        order.map((product) => <Item key={product.id} product={product} />)
      )} */
