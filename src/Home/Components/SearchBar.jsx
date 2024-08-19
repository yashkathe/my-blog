import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BackDrop from "../../Components/UI/BackDrop";

import variantsStore from "../../Context/Variants";
import { SearchContext } from "../../Context/SearchContext";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
	const variantsCtx = useContext(variantsStore);
	const { searchTerm, setSearchTerm } = useContext(SearchContext);

	const [showBackdrop, setShowBackdrop] = useState(false);
	const [additionalClass, setAdditionalClass] = useState("");

	const searchBar = useRef(null);

	const onClickInputHandler = () => {
		setShowBackdrop(true);
		setAdditionalClass(`${styles.input_clicked}`);
	};

	const onBackDropClick = () => {
		setShowBackdrop(false);
		setAdditionalClass(``);
	};

	// handle keyboard clicks

	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") {
				setShowBackdrop(false);
				setAdditionalClass(``);

			}
		};

		const searchFocus = (event) => {
			if (event.key === "/") {
				event.preventDefault();
				searchBar.current.focus();
				setShowBackdrop(true);
				setAdditionalClass(`${styles.input_clicked}`);
			}
		};

		window.addEventListener("keydown", handleEsc);
        window.addEventListener("keydown", searchFocus)

		return () => {
			window.removeEventListener("keydown", handleEsc);
            window.removeEventListener("keydown", searchFocus)
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
				ref={searchBar}
				className={`${styles.input} ${additionalClass}`}
				onClick={onClickInputHandler}
				placeholder={showBackdrop ? "" : "Search for a Blog '/'"}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
