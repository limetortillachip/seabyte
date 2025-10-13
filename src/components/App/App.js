import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.sass";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import Photos from "../../pages/Photos/Photos";
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <main className="App-content">
          {/**Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
        <footer className="App-footer">limetortillachip &copy; 2025.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
