import React from 'react';
import { Link } from 'react-router-dom';
import ControlledForm from '../../components/ControlledForm/ControlledForm';
import styles from './ControllFormPage.module.css';

const ControllFormPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Back to Main</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <ControlledForm />
      </main>
    </div>
  );
};
export default ControllFormPage;
