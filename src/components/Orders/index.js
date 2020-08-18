import React, { useEffect, useState } from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { db } from "../../firebase";

const Orders = ({ dateAndTime }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await db.collection("orders").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setOrders(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/orders" />
        <p>Fecha y hora: {dateAndTime}</p>
      </Row>
      <div>Aqui van las Órdenes</div>

      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.items.length}
            {order.total}
            {order.waiterName}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Orders;
