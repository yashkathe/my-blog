import BlogPreview from "./Components/BlogPreview";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

import styles from "./App.module.css"
import Blogs from "./Components/Blogs";

function App() {

  return (
        <div>
            <Header/>
            <div className={styles.components}>
                <SearchBar/>
                <Blogs/>
            </div>
        </div>
  )
}

export default App
