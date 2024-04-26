import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BackDrop from "./UI/BackDrop";
import variantsStore from "../Context/Variants";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
	const variantsCtx = useContext(variantsStore);

	const [showBackdrop, setShowBackdrop] = useState(false);
	const [additionalClass, setAdditionalClass] = useState("");

	const onClickInputHandler = () => {
		setShowBackdrop(true);
		setAdditionalClass(`${styles.input_clicked}`);
	};

	const onBackDropClick = () => {
		setShowBackdrop(false);
		setAdditionalClass(``);
	};

	return (
		<div className={styles.parent}>
			<AnimatePresence>
				{showBackdrop && (
					<>
						<motion.h1
							variants={variantsCtx.searchTextVariants}
							initial='initial'
							animate='animate'
							exit='exit'
							className={styles.searchText}>
							What are you searching for ?
						</motion.h1>
						<BackDrop onClick={onBackDropClick} />
					</>
				)}
			</AnimatePresence>

			<input
				className={`${styles.input} ${additionalClass}`}
				onClick={onClickInputHandler}
				placeholder={showBackdrop ? "" : "Search for a Blog"}
			/>
		</div>
	);
};

export default SearchBar;
