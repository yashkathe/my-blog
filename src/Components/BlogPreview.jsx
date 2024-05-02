import React from "react";

import Tag from "./Tags/Tag";

import styles from "./BlogPreview.module.css";

const BlogPreview = ({ title, description, tags }) => {
	return (
		<div className={styles.parent}>
			<h2>{title}</h2>
			<p>{description}</p>
			<ul>
				{tags.map((tag) => (
					<Tag key={tag} tagname={tag} />
				))}
			</ul>
		</div>
	);
};

export default BlogPreview;
