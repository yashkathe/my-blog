import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./Components/UI/Header";
import SearchBar from "./Components/UI/SearchBar";
import Blogs from "./Components/Blog/Blogs";
import Motivation from "./Components/Motivation/Motivation";
import Error from "./error/Error";

import SearchProvider from "./Context/SearchProvider";

import styles from "./App.module.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/motivation" exact>
                    <Motivation/>
                </Route>
                <Route path='/' exact>
					<SearchProvider>
						<div>
							<Header />
							<div className={styles.components}>
								<SearchBar />
								<Blogs />
							</div>
						</div>
					</SearchProvider>
				</Route>
                <Route>
                    <Error/>
                </Route>
			</Switch>
		</Router>
	);
}

export default App;
