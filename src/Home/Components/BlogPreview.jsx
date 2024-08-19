import React from "react";

import Tag from "./Tag";

import styles from "./BlogPreview.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogPreview = ({ title, description, imageurl, tags, to }) => {
	const backendProd = import.meta.env.VITE_BACKEND_TEST;

	return (
		<div className={styles.parent}>
			<Link to={to}>
				<span className={styles.cover_img}>
					<img src={`${backendProd}/${imageurl}`} alt={title} />
				</span>
				<div className={styles.metadata}>
					<h2>{title}</h2>
					<p>{description}</p>
					<ul>
						{tags.map((tag) => (
							<Tag key={tag} tagname={tag} />
						))}
					</ul>
				</div>
			</Link>
		</div>
	);
};

export default BlogPreview;
