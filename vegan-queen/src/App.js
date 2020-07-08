import React from 'react';
//Router
import {
  BrowserRouter as Router,
  //Con switch se crea el contenido dinámico, adentro va el route 
  Switch,
  Route,
  //Link es un ancla
  Link,
  NavLink
} from "react-router-dom";


import './App.css';
import Main from './components/Main';
import Waiter from './components/Waiter';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className='btn-group'>
          <Link to = '/' className= 'btn btn-dark'>
            Main
          </Link>
          <NavLink to = '/rol' className= 'btn btn-dark' activeClassName='active'>
            M & C
          </NavLink>
        </div>
        <h1>Elementos permanentes (navbar o quizá los iconos)</h1>
        <hr />
          <Switch>
            <Route path = "/rol">
              Escoge entre mesero o cocinero
            </Route>
            <Route path = "/waiter">
              <Waiter />
            </Route>
            <Route path = "/menu">
              Pantalla menu: desayuno y burger
            </Route>
            <Route path = "/menu-breakfast">
              Pantalla breakfast
            </Route>
            <Route path = "/menu-burger">
              Pantalla burger
            </Route>
            <Route path = "/chef">
              pantalla chef
            </Route>
            <Route path = "/orders">
              Pantalla comandas, aqui van los componentes
            </Route>
            <Route path = "/">
              {/* Aqui se llaman los componentes */}
              <Main />
            </Route>
          </Switch>
    </div>
    </Router>
    
  );
}

export default App;
