import React, { useState } from 'react';

//Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Styles
import './components/utils/styles.css';
import Swal from 'sweetalert2';

//Components
import Main from './components/Main';
import Role from './components/Role';
import Waiter from './components/Waiter';
import Chef from './components/Chef';
import Menu from './components/Menu';
import Breakfast from './components/Breakfast';
import MenuBurger from './components/Burger';
import Orders from './components/Orders';
import Order from './components/Order/Order.js';
import UserName from './components/utils/UserName/index.js';
import ShowName from './components/utils/ShowName/index.js';
//firebase data
import { firebase } from './firebase';

//JSON
import Data from './components/utils/Data/Data.json';

function App() {
	const [order, setOrder] = useState([]);
	const [userName, setUserName] = useState();

	const addingProductToOrder = (product) => {
		let newOrder = [...order];
		console.log(newOrder);
		// if existe producto en orden
		if (order.find((item) => item.name === product.productName)) {
			// entonces incrementar uno a la cantidad
			newOrder = newOrder.map((i) => {
				console.log(i);
				if (i.name === product.productName) {
					return {
						...i,
						quantity: i.quantity + 1,
						cost: i.cost,
						subtotal: i.cost * (i.quantity + 1),
					};
				} else {
					return i;
				}
			});
		} else {
			newOrder.push({
				id: product.id,
				name: product.productName,
				quantity: 1,
				cost: product.cost,
				subtotal: product.cost,
			});
		}

		setOrder(newOrder);
		console.log(newOrder);
	};

	const deletingProductToOrder = (product) => {
		let newOrder = [];
		const foundItem = order.find((item) => item.name === product.productName);

		if (!foundItem) {
			return Swal.fire('El producto no existe en la orden');
		}

		if (foundItem.quantity === 1) {
			newOrder = order.filter((item) => item.name !== foundItem.name);
		} else {
			newOrder = order.map((item) => {
				return item.name === product.productName
					? {
							...item,
							quantity: item.quantity - 1,
							cost: item.cost,
							subtotal: item.cost * (item.quantity - 1),
					  }
					: item;
			});
		}

		setOrder(newOrder);
	};
	//Firebase
	/* React.useEffect(() => {
      const getOrders = async () => {
        try {
          const db = firebase.firestore();
          const data = await db.collection("orders").get();
          console.log(data.docs);
        } catch (error) {
          console.log(error);
        }
      };
      getOrders();
    }, []);*/

	/* const increasingQuantity = () => {

  }; */

	const dateAndTime = new Date().toLocaleString();
	const date = new Date().toLocaleDateString();
	//const time = new Date().toLocaleTimeString()

	return (
		<Router>
			<div>
				<Switch>
					<Route path='/role'>
						<Role />
					</Route>
					<Route path='/waiter'>
						<Waiter date={date} />
						<UserName setUserName={setUserName} />
					</Route>
					<Route path='/chef'>
						<Chef date={date} />
						<UserName setUserName={setUserName} />
					</Route>
					<Route path='/menu'>
						<ShowName userName={userName} />
						<Menu />
					</Route>
					<Route path='/menu-breakfast'>
						<ShowName userName={userName} />
						<Breakfast
							Data={Data.breakfast}
							order={order}
							addingProductToOrder={addingProductToOrder}
							deletingProductToOrder={deletingProductToOrder}
						/>
					</Route>
					<Route path='/menu-burger'>
						<ShowName userName={userName} />
						<MenuBurger
							/* Data={Data.burger} */
							dataHamburger={Data.hamburger}
							dataIngredients={Data.ingredients}
							dataExtras={Data.extras}
							dataDrinks={Data.drinks}
							dataAccompaniments={Data.accompaniments}
							order={order}
							addingProductToOrder={addingProductToOrder}
							deletingProductToOrder={deletingProductToOrder}
						/>
						<ShowName userName={userName} />
					</Route>

					<Route path='/order'>
						<Order />
					</Route>
					<Route path='/orders'>
						<Orders dateAndTime={dateAndTime} />
					</Route>
					<Route path='/'>
						<Main />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default App;
