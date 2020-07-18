import React, { useState } from 'react';
//Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './asset/styles/styles.css';
import Main from './components/Main';
import Waiter from './components/Waiter';
import Role from './components/Role';
import Menu from './components/Menu';
import MenuBreakfast from './components/MenuBreackfast/MenuBreakfast'
import MenuBurger from './components/MenuBurger'
import Chef from './components/Chef';
import Orders from './components/Orders';
import exit from './asset/img/salir.svg'
import waiterOrChef from './asset/img/m-c.svg'
import Navbar from './components/Navbar';

import Data from './components/utils/data/Data'

function App() {
  
  //∫
  const [ order, setOrder] = useState({
    waiter:'',
    chef:'',
    products:[],
    


  })

  return (
    <Router>
      <div className="container mt-5">
        <Navbar />
          <Switch>
            <Route path = "/role">
              <Role />
            </Route>
            <Route path = "/waiter">
              <Waiter />
            </Route>
            <Route path = "/menu">
              <Menu />
            </Route>
            <Route path = "/menu-breakfast">
              <MenuBreakfast Data={Data} />
            </Route>
            <Route path = "/menu-burger">
              <MenuBurger />
            </Route>
            <Route path = "/chef">
              <Chef />
            </Route>
            <Route path = "/orders">
              <Orders />
            </Route>
            <Route path = "/">
              <Main />
            </Route>
          </Switch>
          <div className='btn-group'>
          
          <Link to = '/menu' className= 'btn btn-dark'>
            Menú
          </Link>
          <Link to = '/menu-breakfast' className= 'btn btn-dark'>
            Desayuno
          </Link>
          <Link to = '/menu-burger' className= 'btn btn-dark'>
            Burger
          </Link>
          <Link to = '/waiter' className= 'btn btn-dark'>
            Mesero
          </Link>
          <Link to = '/chef' className= 'btn btn-dark'>
            Cocinero
          </Link>
          <Link to = '/orders' className= 'btn btn-dark'>
            Órdenes
          </Link>
        </div> 
    </div>
    </Router>
    
  );
}

export default App;
