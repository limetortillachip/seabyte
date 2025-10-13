import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="App-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/photos">Photos</Link>
      </nav>
    </header>
  );
}

export default Header;
