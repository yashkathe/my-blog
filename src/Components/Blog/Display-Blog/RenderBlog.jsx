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
	const [date, setDate] = useState({ day: null, month: null, year: null });

	useEffect(() => {
		const getBlogById = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`http://127.0.0.1:8000/api/get-blog-by-id/${id}`
				);
				setData(response.data.data);
			} catch (error) {
				console.log(error);
				setError(error);
			}

			setIsLoading(false);
		};

		getBlogById();
	}, []);

	useEffect(() => {
		setIsLoading(true);

		// set date to human readable format
		if (data) {
			const dateObject = new Date(data.date);
			const day = dateObject.getDate();
			const month = dateObject.toLocaleString("default", { month: "long" });
			const year = dateObject.getFullYear();
			setDate({ day, month, year });
		}

		setIsLoading(false);
	}, [data]);

	const Image = ({ src, alt }) => (
		<img
			src={src}
			alt={alt}
			width='400'
			height='auto'
			style={{ objectFit: "cover" }}
		/>
	);

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
					<p>
						Published on: {date.day} {date.month}, {date.year}
					</p>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							img: Image,
						}}>
						{"---\n" + data.content}
					</ReactMarkdown>
				</div>
			)}
			{!data && !isLoading && error && (
				<div className={classes.center_content}>
					<h2>{error.name}</h2>
					<p>{error.message}</p>
				</div>
			)}
		</>
	);
};

export default RenderBlog;
