import React from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { db } from "../../firebase";

const Orders = ({ dateAndTime, order, setOrder }) => {
  /* React.useEffect(() => {
    const getOrders = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("orders").get();
        //console.log(data.docs);
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setOrder(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []); */

  return (
    <Container>
      <Navbar />
      <Row className='d-flex justify-content-center'>
        <Boton image={menucocina} adress='/orders' />
        <p>Fecha y hora: {dateAndTime}</p>
      </Row>
      <div>Aqui van las Órdenes</div>
      {/* 	<p>
				{orders.map((item) => (
					<li key={item.id}>{item.mesero}</li>
				))}
			</p> */}
    </Container>
  );
};

export default Orders;
