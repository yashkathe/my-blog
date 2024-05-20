import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.parent}>
			<section>
				<h1>Yash's Blog</h1>
			</section>
			<section className={styles.motivation}>
				<Link to="/motivation">
					<p>
						Powered by <span className={styles.rpi}>Raspberry Pi 5</span>
					</p>
				</Link>
			</section>
		</div>
	);
};

export default Header;
