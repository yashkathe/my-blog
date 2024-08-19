import React, { useContext} from "react";

import BlogPreview from "./Components/BlogPreview";
import ErrorComponent from "../Error/ErrorComponent";
import Spinner from "../Components/UI/Spinner";
import { SearchContext } from "../Context/SearchContext";
import useHttpHook from "../Hooks/useHttpHook";

import styles from "./Blogs.module.css";

const Blogs = () => {
	const { searchTerm } = useContext(SearchContext);

	const { data, error, isLoading } = useHttpHook("get-blogs/");

	return (
		<>
			<div className={styles.parent}>
				{!isLoading && !error && data && (
					<div className={styles.blogs}>
						{data.map((blog) => (
							<BlogPreview
								key={blog._id}
								to={`blog/${blog._id}`}
								title={blog.title}
								description={blog.description}
								tags={blog.tags}
							/>
						))}
					</div>
				)}

				{/* no data found for search results */}
				{!isLoading && data && data.length === 0 && searchTerm.length > 0 && (
					<p>No results found for: {searchTerm}</p>
				)}

				{/* database is empty */}
				{!isLoading &&
					data &&
					data.length === 0 &&
					!error &&
					searchTerm.length === 0 && <p>No Blogs Uploaded Yet</p>}

				{/* data is loading */}
				{isLoading && !data && <Spinner />}

				{/* something went wrong */}
				{!isLoading && error && (
					<ErrorComponent
						name={error.name}
						message={error.message}
					/>
				)}
			</div>
		</>
	);
};

export default Blogs;
