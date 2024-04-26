import BlogPreview from "./Components/BlogPreview";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

import styles from "./App.module.css"

function App() {

  return (
        <div>
            <Header/>
            <div className={styles.components}>
                <SearchBar/>
                <BlogPreview/>
            </div>
        </div>
  )
}

export default App
