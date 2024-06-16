import React, {useContext} from "react";
import { motion } from "framer-motion";

import BackToHomeBtn from "../UI/BackToHomeBtn";

import react_logo from "/logos/react_logo2.png";
import django_logo from "/logos/django_logo.png";
import sqlite_logo from "/logos/sqllite.png";

import styles from "./Motivation.module.css";

import variantsCtx from "../../Context/Variants";

const Motivation = () => {
	
    const variants = useContext(variantsCtx)

    return (
		<div className={styles.parent}>
			<h1 className={styles.rpi}>
				Powered by passion: Hosted on my personal Raspberry Pi
			</h1>

			<div>
				<h1>Motivation</h1>
                <div className={styles.underline}></div>
				<p>
					Inspired by the Feynman Technique, I started this blog to simplify
					complex concepts and explain them in easy-to-understand language. This
					is a personal project for me to solidify my own understanding and
					create a resource I can return to whenever I need a refresher.
				</p>
			</div>

			<div className={styles.tech_stack}>
				<h1>Tech Stack</h1>
                <div className={styles.underline}></div>
                
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
                <div className={styles.underline}></div>

				<ul>
                
					<motion.li whileHover={variants.scale}>
						<a  target='__blank__' href='https://yashkathe.github.io/'>
                        → My Portfolio Website
						</a>
					</motion.li>
                    <motion.li whileHover={variants.scale}>
						<a  target='__blank__' href='https://github.com/yashkathe'>
                        → My Github Profile
						</a>
					</motion.li>
				</ul>
			</div>

			<div className={styles.link}>
				<BackToHomeBtn filled={true} />
			</div>
		</div>
	);
};

export default Motivation;
