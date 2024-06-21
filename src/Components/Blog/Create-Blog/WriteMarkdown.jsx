import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub flavored markdown support

import classes from "./WriteMarkdown.module.css";

const WriteMarkdown = ({ title, inputType, name, value, onChange }) => {
	const [isMdMode, setIsMdMode] = useState(false);

	return (
		<div className={classes.formElement}>
			<header>
				<label>{title}</label>
				<button
					onClick={() => {
						setIsMdMode((prev) => !prev);
					}}>
					{isMdMode ? "Switch to TextArea 🔃" : "Switch to MarkDown 🔃"}
				</button>
			</header>
			<div className={classes.writeArea}>
				{!isMdMode && (
					<textarea
						type={inputType}
						name={name}
						value={value}
						onChange={onChange}
					/>
				)}
				{isMdMode && (
					<div className={classes.markdownPreview}>
						<ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
					</div>
				)}
			</div>
		</div>
	);
};

export default WriteMarkdown;
