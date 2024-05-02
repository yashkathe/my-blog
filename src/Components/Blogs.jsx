import React, { useState } from "react";
import BlogPreview from "./BlogPreview";

import styles from './Blogs.module.css'

const Blogs = () => {
	const blogs = [
		{
			title: "Hosting a server on Raspberry PI",
            description: "Learn how to host a raspberry pi server on you raspberry pi in a very easy way",
            tags:["web-server", "hosting", "raspberry pi"]
		},
        {
			title: "Hosting a server on Raspberry PI",
            description: "Learn how to host a raspberry pi server on you raspberry pi in a very easy way",
            tags:["web-server", "hosting", "raspberry pi"]
		},
        {
			title: "Hosting a server on Raspberry PI",
            description: "Learn how to host a raspberry pi server on you raspberry pi in a very easy way",
            tags:["web-server", "hosting", "raspberry pi"]
		}
	];

    const [previewBlogs, setPreviewBlogs] = useState(blogs)

	return(

     <div className={styles.parent}>
        {previewBlogs.map((blog) => (
            <BlogPreview
                key={Math.random()}
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
            />
        ))}
    </div>
    )
};

export default Blogs;
