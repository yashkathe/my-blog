import React, { useState, useContext, useEffect } from "react";
import BlogPreview from "./BlogPreview";

import { SearchContext } from "../Context/SearchContext";

import styles from "./Blogs.module.css";

const Blogs = () => {
	const blogs = [
		{
			title: "Hosting a server on Raspberry PI",
			description:
				"Learn how to host a raspberry pi server on your raspberry pi in a very easy way",
			tags: ["web-server", "hosting", "raspberry pi"],
		},
		{
			title: "Mine Crypto on RPI",
			description: "Learn how to mine monero with rpi",
			tags: ["crypto", "raspberry pi"],
		},
		{
			title: "Deploy home server",
			description: "Deploy Home Server easily on your raspberry pi",
			tags: ["cloud", "home-server", "raspberry pi"],
		},
	];

	const { searchTerm } = useContext(SearchContext);
	const [previewBlogs, setPreviewBlogs] = useState(blogs);

	useEffect(() => {
		setPreviewBlogs(
			blogs.filter((blog) =>
				blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                blog.description.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	}, [searchTerm]);

	return (
		<div className={styles.parent}>
			{previewBlogs.map((blog, index) => (
				<BlogPreview
					key={index}
					title={blog.title}
					description={blog.description}
					tags={blog.tags}
				/>
			))}
            {previewBlogs.length === 0 && <p>No results found for: {searchTerm}</p>}
		</div>
	);
};

export default Blogs;
