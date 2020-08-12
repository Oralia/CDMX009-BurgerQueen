import React, { Fragment } from 'react';
import styles from './style.module.css';
import ButtonNext from '../ButtonNext';
//import arrow from '../../assets/img/arrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Order from '../../Order/Order';

const InfoTotal = ({ total }) => {
	return (
		<Fragment>
			<div className={styles.containerTotal}>
				<div className={styles.iconProduct}>
					<Link to='/menu'>
						<FontAwesomeIcon
							icon={faArrowCircleLeft}
							className={styles.iconProduct}
							/* <Boton image={mburger} adress="/menu-burger" /> */
						/>
					</Link>

					{/* {<img src={arrow} alt="" width= '50px'/>} */}
				</div>
				<div className={styles.totalData}>
					<div>
						{/* <Order 
                        Total={total}
                        /> */}
						<p>Total: {total}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default InfoTotal;
