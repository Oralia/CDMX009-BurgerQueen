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

//JSON
import Data from "./components/utils/Data/Data.json";

function App() {
  const [order, setOrder] = useState([]);

  const addingProductToOrder = (product) => {
    let newOrder = [...order];
    // if existe producto en orden
    if (order.find((item) => item.name === product.productName)) {
      // entonces incrementar uno a la cantidad
      newOrder = newOrder.map((i) => {
        if (i.name === product.productName) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        } else {
          return i;
        }
      });
    } else {
      newOrder.push({
        name: product.productName,
        quantity: 1,
        cost: product.cost,
      });
    }

    setOrder(newOrder);
  };

  const deletingProductToOrder = (product) => {
    let newOrder = [...order];

    console.log("delete", newOrder);
  };

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
              order={order}
              addingProductToOrder={addingProductToOrder}
              deletingProductToOrder={deletingProductToOrder}
            />
          </Route>
          <Route path="/menu-burger">
            <MenuBurger
              Data={Data.burger}
              order={order}
              addingProductToOrder={addingProductToOrder}
              ddeletingProductToOrder={deletingProductToOrder}
            />
          </Route>
          <Route path="/order">
            <Order />
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
