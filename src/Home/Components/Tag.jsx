import React from "react";

import styles from "./Tag.module.css";

const colors = [
	"#e63946",
	"#f4a261",
	"#2a9d8f",
	"#264653",
	"#e9c46a",
	"#0077b6",
	"#0096c7",
	"#00b4d8",
	"#48cae4",
	"#90e0ef",
];

const hashStringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

const Tag = ({ tagname }) => {
    const color = hashStringToColor(tagname);
	const tagStyle = {
		backgroundColor: color,
		color: "#fff",
		borderColor: color,
	};

	return (
		<div className={styles.tag} style={tagStyle}>
			{tagname}
		</div>
	);
};

export default Tag;
