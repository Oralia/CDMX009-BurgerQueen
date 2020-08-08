import React from "react";
import styles from "../utils/Buton/style.module.css";
/* import wrongMark from "../assets/img/wrong-mark.svg"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const images = {
  "sandwich-hummus": require("../assets/img/03-sandwich-hummus.svg"),
  "te-chai-breakfast": require("../assets/img/03-te-chai.svg"),
  "american-coffee": require("../assets/img/03-cafe-americano.svg"),
  "natural-juice": require("../assets/img/03-jugo-natural.svg"),
  "simple-burger": require("../assets/img/04a-hamburguesa-sencilla.svg"),
  "double-burger": require("../assets/img/04a-hamburguesa-doble.svg"),
  portobello: require("../assets/img/04b-portobello.svg"),
  soya: require("../assets/img/04b-soya.svg"),
  grains: require("../assets/img/04b-granos.svg"),
  guacamole: require("../assets/img/04c-guacamole.svg"),
  veganessa: require("../assets/img/04c-veganesa.svg"),
  fries: require("../assets/img/06-papas.svg"),
  salad: require("../assets/img/06-ensalada.svg"),
  hummus: require("../assets/img/06-hummus.svg"),
  tapioca: require("../assets/img/05-tapioca.svg"),
  water: require("../assets/img/05-agua-del-dia.svg"),
  "milk-coconut": require("../assets/img/05-leche-coco.svg"),
  "te-chai-burger": require("../assets/img/05-te-chai.svg"),
};

const Item = ({ product, addingProductToOrder, deletingProductToOrder }) => {
  return (
    <div className={styles.containerItem}>
      <p>{product.productName}</p>
      <p>${product.cost}</p>
      <p>{product.quantity}</p>
      <div className={styles.containerIcons}>
        <FontAwesomeIcon
          icon={faMinusCircle}
          className={styles.iconProduct}
          onClick={() => deletingProductToOrder(product)}
        />
        <img
          src={images[product.image]}
          className={styles.btnNav}
          alt=""
          onClick={() => addingProductToOrder(product)}
        />

        <FontAwesomeIcon
          icon={faPlusCircle}
          className={styles.iconProduct}
          onClick={() => addingProductToOrder(product)}
        />
      </div>
      )
    </div>
  );
};

export default Item;
