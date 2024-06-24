import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/UI/Header";
import SearchBar from "./Components/UI/SearchBar";
import Blogs from "./Components/Blog/Blogs";
import Motivation from "./Components/Motivation/Motivation";
import CreateBlog from "./Components/Blog/Create-Blog/CreateBlog";
import RenderBlog from "./Components/Blog/Display-Blog/RenderBlog";
import Error from "./error/Error";

import SearchProvider from "./Context/SearchProvider";

import styles from "./App.module.css";

function App() {
	return (
		<Router>
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
		</Router>
	);
}

export default App;
