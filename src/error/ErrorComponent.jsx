import React from "react";

import styles from './ErrorComponent.module.css'

const ErrorComponent = ({ name, message }) => {
	return (
		<div className={styles.parent}>
			<h2>{name}</h2>
			<p>{message}</p>
		</div>
	);
};

export default ErrorComponent;
