import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Header from '../../components/Header/Header';
import FormTile from '../../components/FormTile/FormTile';
import styles from './Main.module.css';

const MainPage: React.FC = () => {
  const controlledForm = useSelector(
    (state: RootState) => state.form.controlledForm,
  );
  const uncontrolledForm = useSelector(
    (state: RootState) => state.form.uncontrolledForm,
  );

  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <h1>Form Data</h1>
        <div className={styles.tilesContainer}>
          <FormTile title="Uncontrolled Form" formData={uncontrolledForm} />
          <FormTile title="Controlled Form" formData={controlledForm} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
