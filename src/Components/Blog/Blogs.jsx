import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BlogPreview from "./BlogPreview";

import { SearchContext } from "../../Context/SearchContext";

import styles from "./Blogs.module.css";
import ErrorComponent from "../../error/ErrorComponent";
import Spinner from "../UI/Spinner";

const Blogs = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setError] = useState(false);
	const [data, setData] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	const { searchTerm } = useContext(SearchContext);
	const [previewBlogs, setPreviewBlogs] = useState([]);

	const fetchData = async (pageNumber) => {
		try {
			setIsLoading(true);
			const response = await axios.get(`http://127.0.0.1:8000/api/get-blog/${pageNumber}`);
			setData(response.data);
			setPreviewBlogs(response.data.data);
			setIsLoading(false);
		} catch (err) {
			setError(err);
			setIsLoading(false);
		}
	};

	// fetch data
	useEffect(() => {
		fetchData(pageNumber);
	}, [pageNumber]);

	return (
		<>
			<div className={styles.parent}>
				{!isLoading && !hasError && previewBlogs && (
					<div className={styles.blogs}>
						{previewBlogs.map((blog) => (
							<BlogPreview
								key={blog.id}
                                to={`blog/${blog.id}`}
								title={blog.title}
								description={blog.description}
								tags={blog.tags}
							/>
						))}
					</div>
				)}

				{/* no data found for search results */}
				{previewBlogs.length === 0 && searchTerm.length > 0 && !isLoading && (
					<p>No results found for: {searchTerm}</p>
				)}

				{/* database is empty */}
				{previewBlogs.length === 0 &&
					!hasError &&
					searchTerm.length === 0 &&
					!isLoading && <p>No Blogs Uploaded Yet</p>}

				{/* data is loading */}
				{isLoading && <Spinner />}

				{/* something went wrong */}
				{hasError && !isLoading && (
					<ErrorComponent
						name={`${hasError.name} ` || "Error"}
						message={hasError.message || "Something Went Wrong"}
					/>
				)}
			</div>
		</>
	);
};

export default Blogs;
