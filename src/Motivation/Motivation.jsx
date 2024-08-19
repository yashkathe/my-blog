import React, {useContext} from "react";
import { motion } from "framer-motion";

import BackToHomeBtn from "../Components/Shared/BackToHomeBtn";

import mongo_logo from "/logos/mongo_db_logo.png";
import express_logo from "/logos/express_logo.png"
import react_logo from "/logos/react_logo.png";
import node_logo from "/logos/node_logo.png";

import styles from "./Motivation.module.css";

import variantsCtx from "../Context/Variants";

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
					I created this blog because I love to research and I am also a compulsive note taker.
                    But sometimes the concepts are difficult, so I love to simplify them with losing the complexity 
                    of the topic/concept. So I am practicing feynman technique.
                    <br/>
                    <br/>
                    'The Feynman technique is all about explaining a concept in simple terms, as if you're teaching it to someone else, to really grasp the idea yourself'
				</p>
			</div>

			<div className={styles.tech_stack}>
				<h1>Tech Stack</h1>
                <div className={styles.underline}></div>
                
				<ul>
					<li>
						<img src={mongo_logo} alt='MongoDB' />
					</li>
                    <li>
						<img src={express_logo} alt='Express' />
					</li>
                    <li>
						<img src={react_logo} alt='REACT' />
					</li>
					<li>
						<img src={node_logo} alt='NodeLogo' />
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
