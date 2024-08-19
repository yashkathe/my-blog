import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import variantStore from "../../Context/Variants.js";

import styles from "./Header.module.css";

const Header = () => {
	const variants = useContext(variantStore);

	return (
		<div className={styles.parent}>
			<section>
					<h1><Link to="/">&lt;My Research&gt;</Link></h1>
			</section>
			<section className={styles.motivation}>
				<Link to='/motivation'>
					<motion.p whileHover={variants.scale}>
						Powered by <span className={styles.rpi}>Raspberry Pi 5</span>
					</motion.p>
				</Link>
			</section>
		</div>
	);
};

export default Header;
