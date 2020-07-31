import React, { useState } from "react";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styles
import "./components/utils/styles.css";

//Components
import Main from "./components/Main";
import Role from "./components/Role";
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";
import Menu from "./components/Menu";
import MenuBreakfast from "./components/Breakfast";
import MenuBurger from "./components/Burger";
import Orders from "./components/Orders";
import Order from "./components/Order/Order.js";

//Recordar que usamos arreglos
//SI ya existe enonces a quantity agrega 1
//Si NO existe entonces crea uno nuevo

//JSON
import Data from "./components/utils/Data/Data.json";

//donde va quantity?
function App() {
  const [order, setOrder] = useState({
    client: "",
    total: 0,
    items: []
  });

  const addingProductToOrder = (product) => {
    //const product = Data.breakfast.filter((product) => product.id === id)[0];
    //console.log("click");
    //setOrder([...order, product]);
   setOrder({ ...order, items: [...order.items, product]});
  };

  const deletingProduct = (id) => {
    const arrayProduct = order.items.filter((product) => product.id !== id);
    setOrder(arrayProduct)
    console.log("delete");
  };

  /* const increasingQuantity = () => {

  }; */

  const dateAndTime = new Date().toLocaleString();
  const date = new Date().toLocaleDateString();
  //const time = new Date().toLocaleTimeString()

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/role">
            <Role />
          </Route>
          <Route path="/waiter">
            <Waiter date={date} />
          </Route>
          <Route path="/chef">
            <Chef date={date} />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/menu-breakfast">
            <MenuBreakfast
              Data={Data.breakfast}
              /* order={order} */
              addingProductToOrder={addingProductToOrder}
              deletingProduct={deletingProduct}
            />
            <Order order={order} />
          </Route>
          <Route path="/menu-burger">
            <MenuBurger
              /* Data={Data.burger} */
              dataHamburger ={Data.hamburger}
              dataIngredients ={Data.ingredients}
              dataExtras ={Data.extras}
              dataDrinks ={Data.drinks}
              dataAccompaniments ={Data.accompaniments}
              addingProductToOrder={addingProductToOrder}
              deletingProduct={deletingProduct}
              
            />
          </Route>
          <Route path="/orders">
            <Orders dateAndTime={dateAndTime} />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
