import React, { Fragment } from 'react'
import styles from './style.module.css'

const InfoClients = () => {
    return (
        <Fragment>
            <div className={styles.clientData}>
                <div>
                    <p>Nombre del cliente</p>
                    <input type="text" placeholder='cliente'/>
                </div>
                <div>
                    <p>Número de mesa</p>
                    <input type="text" placeholder='mesa'/>
                </div>
            </div>
                <div className={styles.paragraph}>
                    <p >Presiona el número de veces necesarias para agregar productos o aumentar la cantidad</p>
                </div>
        </Fragment>
    )
}

export default InfoClients
