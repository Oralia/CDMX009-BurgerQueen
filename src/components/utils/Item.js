import React from "react";
import styles from "../utils/Buton/style.module.css";
/* import wrongMark from "../assets/img/wrong-mark.svg"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

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

const Item = ({
  product,
  order,
  addingProductToOrder,
  deletingProductToOrder,
  Data,
}) => {
  return (
    <div className={styles.containerItem}>
      <img
        src={images[product.image]}
        className={styles.btnNav}
        alt=""
        onClick={() => addingProductToOrder(product)}
      />
      <p>{product.productName}</p>
      <h6>${product.cost}</h6>
      <p>{product.quantity}</p>
      {/* <img
        src={wrongMark}
        className={styles.iconProduct}
        onClick={() => deletingProductToOrder(product)}
        alt=""
      /> */}
      
      <div className = {styles.containerIcons}>
        
         
          
        <FontAwesomeIcon 
          icon = { faMinusCircle }
          className={styles.iconProduct}
          onClick={() => deletingProductToOrder(product)}
          />
        {/* <p>{product.quantity}</p> */}
        <p> 0 </p>
        <FontAwesomeIcon 
          icon = { faPlusCircle }
          className={styles.iconProduct}
          onClick={() => addingProductToOrder(product)}
          />
      </div>

      

        {/* <button type="button" onClick={() => deletingProductToOrder(product)}>
        <FontAwesomeIcon 
        icon = { faTimesCircle }
        color='#F5C6C6'
         />
      </button> */}
    </div>
  );
};

export default Item;

//<h6>{product.kind}</h6>
