import React from 'react'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.parent}>
        <section>
            <h1>Yash's Blog</h1>
        </section>
        <section>
            <p>Powered by <span className={styles.rpi}>Raspberry Pi 5</span></p>
        </section>
    </div>
  )
}

export default Header