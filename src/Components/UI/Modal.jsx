import { useContext } from "react"
import ReactDOM from 'react-dom'
import {motion} from 'framer-motion'

import variantsStore from '../../Context/Variants'

import styles from './Modal.module.css'

const Modal = ({title, body, onClick}) => {

    const variantsCtx = useContext(variantsStore)

    return ReactDOM.createPortal(
        <motion.div className={styles.parent}>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={onClick}>Confirm</button>
        </motion.div>,
        document.getElementById("modal")
    )

}

export default Modal