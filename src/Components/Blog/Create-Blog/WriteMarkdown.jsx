import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import classes from "./WriteMarkdown.module.css";
import Editor from "../Editor/Editor";

const WriteMarkdown = ({ title, inputType, name, value, onChange }) => {
	const [isMdMode, setIsMdMode] = useState(false);
	const txtAreaRef = useRef(null);

	return (
		<div className={classes.formElement}>
			<header>
				<div>
					<label>{title}</label>
					<button
						onClick={() => {
							setIsMdMode((prev) => !prev);
						}}>
						{isMdMode ? "Switch to TextArea 🔃" : "Switch to MarkDown 🔃"}
					</button>
				</div>
				<Editor ref={txtAreaRef} onChange={onChange} />
			</header>
			<div className={classes.writeArea}>
				{!isMdMode && (
					<textarea
						type={inputType}
						name={name}
						value={value}
						onChange={onChange}
						ref={txtAreaRef}
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
