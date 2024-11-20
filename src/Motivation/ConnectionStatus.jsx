import React from 'react'

import rpi from '/stock/rpi.gif'
import arrows from '/stock/transfer.png'
import browser from '/stock/global-network.png'
import pc from '/stock/browser.png'

import styles from './ConnectionStatus.module.css'

const ConnectionStatus = () => {
  return (
    <div className={styles.parent}>

        <div className={styles.images}>
            <img src={pc} alt="pc"/>
        </div>

        <div className={styles.arrow}>
            <img src={arrows} alt="bi directional arrow"/>
        </div>

        <div className={styles.images}>
            <img src={browser} alt="the internet"/>
        </div>

        <div className={styles.arrow}>
            <img src={arrows} alt="bi directional arrow"/>
        </div>

        <div className={styles.images}>
            <img src={rpi} alt="rpi gif"/>
        </div>

    </div>
  )
}

export default ConnectionStatus