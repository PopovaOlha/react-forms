import React, { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Header from '../../components/Header/Header';
import styles from './Main.module.css';

const MainPage: React.FC = () => {
  const controlledForm = useSelector(
    (state: RootState) => state.form.controlledForm,
  );
  const uncontrolledForm = useSelector(
    (state: RootState) => state.form.uncontrolledForm,
  );

  const createImageURL = (fileURL: string | null) => {
    if (fileURL) {
      return fileURL;
    }
    return '';
  };

  const uncontrolledImageURL = useMemo(
    () => createImageURL(uncontrolledForm.pictureURL),
    [uncontrolledForm.pictureURL],
  );

  const controlledImageURL = useMemo(
    () => createImageURL(controlledForm.pictureURL),
    [controlledForm.pictureURL],
  );

  useEffect(() => {
    return () => {};
  }, [uncontrolledForm.pictureURL, controlledForm.pictureURL]);

  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <h1>Form Data</h1>
        <div className={styles.tilesContainer}>
          <div className={styles.tile}>
            <h2>Uncontrolled Form</h2>
            <p>
              <strong>Name:</strong> {uncontrolledForm.name || 'N/A'}
            </p>
            <p>
              <strong>Age:</strong> {uncontrolledForm.age || 'N/A'}
            </p>
            <p>
              <strong>Email:</strong> {uncontrolledForm.email || 'N/A'}
            </p>
            <p>
              <strong>Password:</strong>{' '}
              {uncontrolledForm.password1 ? '******' : 'N/A'}
            </p>
            <p>
              <strong>Confirm Password:</strong>{' '}
              {uncontrolledForm.password2 ? '******' : 'N/A'}
            </p>
            <p>
              <strong>Gender:</strong> {uncontrolledForm.gender || 'N/A'}
            </p>
            <p>
              <strong>Terms Accepted:</strong>{' '}
              {uncontrolledForm.terms ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Picture:</strong>
              {uncontrolledForm.pictureURL ? (
                <img
                  src={uncontrolledImageURL}
                  alt="Uploaded"
                  className={styles.image}
                />
              ) : (
                'No file uploaded'
              )}
            </p>
          </div>
          <div className={styles.tile}>
            <h2>Controlled Form</h2>
            <p>
              <strong>Name:</strong> {controlledForm.name || 'N/A'}
            </p>
            <p>
              <strong>Age:</strong> {controlledForm.age || 'N/A'}
            </p>
            <p>
              <strong>Email:</strong> {controlledForm.email || 'N/A'}
            </p>
            <p>
              <strong>Password:</strong>{' '}
              {controlledForm.password1 ? '******' : 'N/A'}
            </p>
            <p>
              <strong>Confirm Password:</strong>{' '}
              {controlledForm.password2 ? '******' : 'N/A'}
            </p>
            <p>
              <strong>Gender:</strong> {controlledForm.gender || 'N/A'}
            </p>
            <p>
              <strong>Terms Accepted:</strong>{' '}
              {controlledForm.terms ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Picture:</strong>
              {controlledForm.pictureURL ? (
                <img
                  src={controlledImageURL}
                  alt="Uploaded"
                  className={styles.image}
                />
              ) : (
                'No file uploaded'
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
