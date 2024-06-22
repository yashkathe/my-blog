import React, { useState } from "react";

import FormElement from "../../Shared/FormElement";

import styles from "./CreateBlog.module.css";
import WriteMarkdown from "./WriteMarkdown";

const CreateBlog = () => {
	const [pageNum, setPageNum] = useState(1);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		tags: "",
		blog: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form onSubmit={formSubmitHandler} className={styles.form}>
			{pageNum === 1 && (
				<div>
					<FormElement
						title='Title'
						inputType='text'
						name='title'
						value={formData.title}
						onChange={handleInputChange}
					/>
					<FormElement
						title='Description'
						inputType='text'
						name='description'
						value={formData.description}
						onChange={handleInputChange}
					/>
					<FormElement
						title='Tags'
						inputType='text'
						name='tags'
						value={formData.tags}
						onChange={handleInputChange}
					/>
					<button
						onClick={() => {
							setPageNum(2);
						}}>
						NEXT ➡️
					</button>
				</div>
			)}
			{pageNum === 2 && (
				<div>
					<WriteMarkdown
						title='Start Writing Your Blog'
						name='blog'
						value={formData.blog}
						onChange={handleInputChange}
					/>
					<div className={styles.submit}>
						<button
							onClick={() => {
								setPageNum(1);
							}}>
							BACK ⬅️
						</button>
						<button type='submit'>SUBMIT 🚀</button>
					</div>
				</div>
			)}
		</form>
	);
};

export default CreateBlog;
