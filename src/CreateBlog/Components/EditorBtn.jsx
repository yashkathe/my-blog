import React from "react";

import styles from "./EditorBtn.module.css";

const EditorBtn = ({ src, onClick }) => {
	return (
		<button className={styles.btn} onClick={onClick} type="button">
			<img src={src} />
		</button>
	);
};

export default EditorBtn;
