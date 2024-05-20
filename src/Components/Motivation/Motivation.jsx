import React from "react";
import { Link } from "react-router-dom";

import BackToHomeBtn from "../UI/BackToHomeBtn";

import react_logo from '../../assets/react-logo.png'
import django_logo from '../../assets/django_logo.png'

import styles from "./Motivation.module.css";

const Motivation = () => {
	return (
		<div className={styles.parent}>
			<div>
				<h1>Motivation</h1>
				<p>
					Inspired by the Feynman Technique, I started this blog to simplify
					complex concepts and explain them in easy-to-understand language. This
					is a personal project for me to solidify my own understanding and
					create a resource I can return to whenever I need a refresher.
				</p>
			</div>

			<div className={styles.tech_stack}>
				<h1>Tech Stack</h1>
				<ul>
					<li>
						<img src={react_logo} alt='react logo' />
					</li>
					<li>
						<img src={django_logo} alt='django logo' />
					</li>
				</ul>
			</div>

			<div className={styles.link}>
				<BackToHomeBtn/>
			</div>
		</div>
	);
};

export default Motivation;
