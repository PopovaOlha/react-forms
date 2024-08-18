import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/uncontrolled">
              Uncontrolled Form
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/controlled">
              Controlled Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
