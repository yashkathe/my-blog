import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import variantsStore from "../../Context/Variants";

import styles from "./BackDrop.module.css";

const BackDrop = ({ onClick }) => {
	const variantsCtx = useContext(variantsStore);

	return ReactDOM.createPortal(
			<motion.div
				variants={variantsCtx.backdrop}
				initial='initial'
				animate='animate'
				exit='exit'
				className={styles.backdrop}
				onClick={onClick}></motion.div>,
		document.getElementById("backdrop")
	);
};

export default BackDrop;
