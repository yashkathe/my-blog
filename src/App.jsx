import Header from "./Components/UI/Header";
import SearchBar from "./Components/UI/SearchBar";
import Blogs from "./Components/Blog/Blogs";

import SearchProvider from "./Context/SearchProvider";

import styles from "./App.module.css";

function App() {
	return (
		<SearchProvider>
			<div>
				<Header />
				<div className={styles.components}>
					<SearchBar />
					<Blogs />
				</div>
			</div>
		</SearchProvider>
	);
}

export default App;
