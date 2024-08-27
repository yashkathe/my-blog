import React, { forwardRef, useEffect, useRef } from "react";

import EditorBtn from "./EditorBtn";
import useHttpHook from "../../Hooks/useHttpHook";

import styles from "./Editor.module.css";

import link from "/editor/link.png";
import image from "/editor/image.png";
import upload from "/editor/upload.png";

const Editor = forwardRef((props, ref) => {
	
    const inputRef = useRef()

    const handleInputClick = () => {

        if(inputRef.current){
            inputRef.current.click()
        }

    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            const { data, error, isLoading } = useHttpHook("upload-image", "POST", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            
            if (data) {
                console.log("Upload response:", data);
            }

            if (error) {
                console.error("Upload error:", error);
            }
        }
    };

	return (
		<div className={styles.parent}>
			<EditorBtn src={link} />
			<EditorBtn src={image}/>
			<EditorBtn src={upload} onClick={handleInputClick}/>
            <input type="file" ref={inputRef} onChange={handleImageUpload} hidden/>
		</div>
	);
});

export default Editor;
