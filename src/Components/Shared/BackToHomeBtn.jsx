import React from "react";
import { Link } from "react-router-dom";

import styles from "./BackToHomeBtn.module.css";

const BackToHomeBtn = ({filled}) => {
	return (
		<div className={filled ? styles.parent_filled: styles.parent }>
			<Link to='/'>Back To Home</Link>
		</div>
	);
};

export default BackToHomeBtn;
