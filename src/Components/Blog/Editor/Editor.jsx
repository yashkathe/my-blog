import React, { forwardRef } from "react";

import EditorBtn from "./EditorBtn";

import styles from "./Editor.module.css";

import link from "/editor/link.png";
import image from "/editor/image.png";
import upload from "/editor/upload.png";

const Editor = forwardRef((props, ref) => {
	
    const insertLink = () => {
		if (ref && ref.current) {
			const textarea = ref.current;
			const start = textarea.selectionStart;
			const end = textarea.selectionEnd;
			const text = textarea.value;
			const linkTemplate = "[name of the link]()";
			const newText = text.slice(0, start) + linkTemplate + text.slice(end);
			textarea.value = newText;
			textarea.setSelectionRange(start + 2, start + 2);
			textarea.focus();

			// Trigger onChange if necessary
			if (props.onChange) {
				props.onChange({ target: { name: textarea.name, value: newText } });
			}
		}
	};

    const insertImage = () => {
		if (ref && ref.current) {
			const textarea = ref.current;
			const start = textarea.selectionStart;
			const end = textarea.selectionEnd;
			const text = textarea.value;
			const linkTemplate = "![name of the image]()";
			const newText = text.slice(0, start) + linkTemplate + text.slice(end);
			textarea.value = newText;
			textarea.setSelectionRange(start + 4, start + 4);
			textarea.focus();

			// Trigger onChange if necessary
			if (props.onChange) {
				props.onChange({ target: { name: textarea.name, value: newText } });
			}
		}
	};

	return (
		<div className={styles.parent}>
			<EditorBtn src={link} onClick={insertLink} />
			<EditorBtn src={image} onClick={insertImage}/>
			<EditorBtn src={upload} />
		</div>
	);
});

export default Editor;
