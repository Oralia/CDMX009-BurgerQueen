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

  const addingProduct = (product) => {
    //const product = Data.breakfast.filter((product) => product.id === id)[0];
    //console.log("click");
    //setOrder([...order, id]);
    setOrder([...order, product]);
  };

  const deletingProduct = (id) => {
    //const delProduct = order.filter((product) => product.id !== id);
    console.log("delete");
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
              addingProduct={addingProduct}
              deletingProduct={deletingProduct}
            />
            <Order order={order} />
          </Route>
          <Route path="/menu-burger">
            <MenuBurger
              Data={Data.burger}
              order={order}
              addingProduct={addingProduct}
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
