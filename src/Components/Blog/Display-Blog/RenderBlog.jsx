import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Spinner from "../../UI/Spinner";

import classes from "./RenderBlog.module.css";

const RenderBlog = () => {
	const { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getBlogById = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`http://127.0.0.1:8000/api/get-blog-by-id/${id}`
				);
				setData(response.data.data);
			} catch (error) {
				console.log(error.message);
				setError(error.message);
			}

			setIsLoading(false);
		};

		getBlogById();
	}, []);

	return (
		<>
			{!data && isLoading && !error && (
				<div className={classes.center_content}>
					<Spinner />
				</div>
			)}
			{data && !isLoading && !error && (
				<div className={classes.parent}>
					<h1>{data.title}</h1>
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{data.content}
					</ReactMarkdown>
				</div>
			)}
			{!data && !isLoading && error && <div className={classes.center_content}><p>{error}</p></div>}
		</>
	);
};

export default RenderBlog;
