import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import useHttpHook from "../Hooks/useHttpHook";
import Spinner from "../Components/UI/Spinner";

import classes from "./RenderBlog.module.css";

const RenderBlog = () => {
	const { id } = useParams();

	const { data, error, isLoading } = useHttpHook(`get-blog-by-id/${id}`);

	const [date, setDate] = useState({ day: null, month: null, year: null });

	useEffect(() => {

		// set date to human readable format
		if (data && !isLoading) {
			const dateObject = new Date(data.date);
			const day = dateObject.getDate();
			const month = dateObject.toLocaleString("default", { month: "long" });
			const year = dateObject.getFullYear();
			setDate({ day, month, year });
		}

	}, [data, isLoading]);

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
			{/* spinner in loading state */}
			{!data && isLoading && !error && (
				<div className={classes.center_content}>
					<Spinner />
				</div>
			)}

			{/* render blog  */}
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

			{/* handle error */}
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
