import { Link } from "react-router-dom";
import styles from "./Header.module.sass";

export function Header() {
  return (
    <header className={styles.AppHeader}>
      <nav>
        <ul className={styles.HeaderNav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
