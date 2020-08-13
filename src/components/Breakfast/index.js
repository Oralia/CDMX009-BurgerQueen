import React, { Fragment, useState } from 'react';
import Boton from '../utils/Buton';
import mbreakfast from '../assets/img/02-menu-desayuno.svg';
import ItemProductCatalog from '../utils/ItemProductCatalog';
import Navbar from '../Navbar';
import styles from './style.module.css';
import Modal from 'react-modal';
import Order from '../Order/Order.js';

import InfoClients from '../utils/InfoClients';
import InfoTotal from '../utils/InfoTotal';
import {db} from '../../firebase'

Modal.setAppElement('#root');

const Breakfast = ({
	Data,
	order,
	addingProductToOrder,
	deletingProductToOrder,
	setOrder,
}) => {
	const total = order.reduce((sum, item) => sum + item.subtotal, 0);
	console.log('calculando total', total);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	
	/* 
	const sendOrder = async()=>{
		await db.collection('orders').doc.set()
	}
	
	*/
	return (
		<Fragment>
			<Navbar />
			<div className={styles.logoUp}>
				<Boton image={mbreakfast} adress='/menu-breakfast' />
			</div>

			<InfoClients />

			<section className={styles.container}>
				{Data.map((product) => (
					<ItemProductCatalog
						key={product.id}
						product={product}
						order={order}
						setOrder={setOrder}
						addingProductToOrder={addingProductToOrder}
						deletingProductToOrder={deletingProductToOrder}
					/>
				))}
			</section>
			<InfoTotal total={total} />
			<div className={styles.contentButtonNext}>
				<button
					className={styles.buttonNext}
					onClick={() => setModalIsOpen(true)}
				>
					Confirmar orden
				</button>
			</div>
			<div className={styles.modalContainer}>
				<Modal className={styles.Modal} isOpen={modalIsOpen}>
					<div>
						<Order order={order} />
					</div>
					<div className={styles.buttonsContainer}>
						<button
							className={styles.buttonNext}
							onClick={() => setModalIsOpen(false)}
						>
							Cancelar
						</button>

						{/* Este botón tendría que enviar a firebase */}
						<button
							className={styles.buttonNext}
							onClick={() => setModalIsOpen(false)}
						>
							Enviar a Cocina
						</button>
					</div>
				</Modal>
			</div>
		</Fragment>
	);
};

export default Breakfast;

/*<Order order={order} />*/
