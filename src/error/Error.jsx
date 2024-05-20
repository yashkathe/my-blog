import React from "react";
import { useLocation, Link } from "react-router-dom";

import BackToHomeBtn from "../Components/UI/BackToHomeBtn";

import styles from "./Error.module.css";

const Error = () => {
	let location = useLocation();

	return (
		<div className={styles.parent}>
			<h1>404 Page</h1>
			<p>
				The route <span>{location.pathname}</span> you are looking for doesn't
				exist
			</p>
			<div className={styles.btn}>
				<BackToHomeBtn filled={true}/>
			</div>
		</div>
	);
};

export default Error;
