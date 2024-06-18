import React from "react";

import classes from "./FormElement.module.css";

const FormElement = ({ title, inputType, name, value, onChange }) => {
	return (
		<div className={classes.formElement}>
			<label>{title}</label>
			<input type={inputType} name={name} value={value} onChange={onChange} />
		</div>
	);
};

export default FormElement;
