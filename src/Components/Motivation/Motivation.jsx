import React from "react";
import { Link } from "react-router-dom";

import BackToHomeBtn from "../UI/BackToHomeBtn";

import react_logo from "/logos/react_logo2.png";
import django_logo from "/logos/django_logo.png";
import sqlite_logo from "/logos/sqllite.png";

import styles from "./Motivation.module.css";

const Motivation = () => {
	return (
		<div className={styles.parent}>
			<div>
				<h1>Motivation</h1>
				<p></p>
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
						<img src={react_logo} alt='REACT' />
					</li>
					<li>
						<img src={django_logo} alt='DJANGO' />
					</li>
					<li>
						<img src={sqlite_logo} alt='SQLite' />
					</li>
				</ul>
			</div>

			<div className={styles.other_links}>
				<h1>Other Links</h1>
				<ul>
					<li>
						<a target='__blank__' href='https://yashkathe.github.io/'>
							My Portfolio Website
						</a>
					</li>
				</ul>
			</div>

			<div className={styles.link}>
				<BackToHomeBtn filled={true} />
			</div>
		</div>
	);
};

export default Motivation;
