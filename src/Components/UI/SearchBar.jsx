import React, { useState, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BackDrop from "./BackDrop";

import variantsStore from "../../Context/Variants";
import { SearchContext } from "../../Context/SearchContext";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
	const variantsCtx = useContext(variantsStore);
	const { searchTerm, setSearchTerm } = useContext(SearchContext);

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

	// on pressing escape exit the backdrop

	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape" || event.key === "Enter") {
				setShowBackdrop(false);
				setAdditionalClass(``);
			}
		};

		window.addEventListener("keydown", handleEsc);

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, []);

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
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
