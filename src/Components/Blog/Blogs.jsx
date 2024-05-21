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
            console.log(err)
			console.log(err);
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
                                to={blog.route}
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
						name={hasError.name || "Error"}
						message={hasError.message || "Something Went Wrong"}
					/>
				)}
			</div>

			{/* handle page changes */}
			{!isLoading && !hasError && (
				<div className={styles.footer}>
					{
						<button
							onClick={() => {
								setPageNumber((prevPage) => prevPage - 1);
							}}
							className={
								data.prev_page ? styles.prev_page : styles.prev_page_disabled
							}
							disabled={data.prev_page ? false : true}>
							Prev Page
						</button>
					}
					<p>{data.current_page}</p>
					{
						<button
							onClick={() => {
								setPageNumber((prevPage) => prevPage + 1);
							}}
							className={
								data.next_page ? styles.next_page : styles.next_page_disabled
							}
							disabled={data.next_page ? false : true}>
							Next Page
						</button>
					}
				</div>
			)}
		</>
	);
};

export default Blogs;
