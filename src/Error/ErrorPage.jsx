import React from "react";
import { useLocation } from "react-router-dom";

import BackToHomeBtn from "../Components/UI/BackToHomeBtn";

import styles from "./ErrorPage.module.css";

const Error = () => {
	let location = useLocation();

	return (
		<div className={styles.parent}>
			<h1>Error 404 👀</h1>
			<p>
				The route <span>{location.pathname}</span> you are looking for doesn't
				exist
			</p>
			<div className={styles.btn}>
				<BackToHomeBtn filled={true} />
			</div>
		</div>
	);
};

export default Error;
