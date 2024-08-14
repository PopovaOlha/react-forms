import React from 'react';
import { Link } from 'react-router-dom';
import UncontrolledForm from '../../components/UncontrolledForm/UncontrolledForm';
import styles from './UncontrolledFormPage.module.css';

const UncontrolledFormPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <header>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/">
                Back to Main
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div>
          <UncontrolledForm />
        </div>
      </main>
    </div>
  );
};
export default UncontrolledFormPage;
