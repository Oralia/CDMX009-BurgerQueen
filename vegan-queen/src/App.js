import React from "react";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./components/utils/styles.css";
import Main from "./components/Main";
/* import Role from "./components/Role";
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";
import Menu from "./components/Menu";
import MenuBreakfast from "./components/Breakfast";
import MenuBurger from "./components/Burger";
import Orders from "./components/Orders"; */

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/role">
            <Role />
          </Route>
          <Route path="/waiter">
            <Waiter />
          </Route>
          <Route path="/chef">
            <Chef />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/menu-breakfast">
            <MenuBreakfast />
          </Route>
          <Route path="/menu-burger">
            <MenuBurger />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
