import React, { Fragment } from 'react'
import styles from './style.module.css'
import ButtonNext from "../ButtonNext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const InfoTotal = () => {
    return (
        <Fragment>
            <div className={styles.containerTotal}>
                <div className={styles.iconProduct}>
                    <FontAwesomeIcon 
                    icon = { faArrowCircleLeft }
                    />
                </div>
                <div class={styles.totalData}>
                    <div>
                        <p>Total</p>
                        <input type="text" placeholder='Money money'/>
                    </div>
                    <br/>
                    <ButtonNext
                    /* text='Enviar a cocina' */
                    />
                </div>  
            </div>
            
        </Fragment>
    )
}

export default InfoTotal
