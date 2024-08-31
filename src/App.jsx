import { Switch, Route } from "react-router-dom";

import Header from "./Components/UI/Header";
import SearchBar from "./Home/Components/SearchBar";
import Blogs from "./Home/Blogs";
import Motivation from "./Motivation/Motivation";
import CreateBlog from "./CreateBlog/CreateBlog";
import RenderBlog from "./DisplayBlog/RenderBlog";
import Error from "./Error/ErrorPage";

import SearchProvider from "./Context/SearchProvider";

import styles from "./App.module.css";

function App() {

	return (
			<SearchProvider>
				<Switch>
					<Route path='/motivation' exact>
						<Header />
						<div className={styles.components}>
							<Motivation />
						</div>
					</Route>
					<Route path='/' exact>
						<div>
							<Header />
							<div className={styles.components}>
								<SearchBar />
								<Blogs />
							</div>
						</div>
					</Route>
					<Route path='/create-blog' exact>
						<div>
							<Header />
							<div className={styles.components}>
								<CreateBlog />
							</div>
						</div>
					</Route>
                    <Route path='/blog/:id'>
                        <div>
                            <Header/>
                            <div className={styles.components}>
								<RenderBlog />
							</div>
                        </div>
                    </Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</SearchProvider>
	);
}

export default App;
