import React from "react";

const FormMetaData = () => {
	return (
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
				type='button'
				onClick={() => {
					setPageNum(2);
				}}>
				NEXT ➡️
			</button>
		</div>
	);
};

export default FormMetaData;
