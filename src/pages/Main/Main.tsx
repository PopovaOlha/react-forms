import React, { useMemo } from 'react';
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

  // Helper function to create a URL for the image
  const createImageURL = (file: File | null) => {
    if (file) {
      return URL.createObjectURL(file);
    }
    return '';
  };

  // Clean up URLs when the component unmounts
  React.useEffect(() => {
    return () => {
      // Revoke object URLs to free up memory
      if (uncontrolledForm.picture) {
        URL.revokeObjectURL(createImageURL(uncontrolledForm.picture));
      }
      if (controlledForm.picture) {
        URL.revokeObjectURL(createImageURL(controlledForm.picture));
      }
    };
  }, [uncontrolledForm.picture, controlledForm.picture]);

  // Use memoized URLs to avoid unnecessary re-renders
  const uncontrolledImageURL = useMemo(
    () => createImageURL(uncontrolledForm.picture),
    [uncontrolledForm.picture],
  );
  const controlledImageURL = useMemo(
    () => createImageURL(controlledForm.picture),
    [controlledForm.picture],
  );

  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <h1>Form Data</h1>
        <div className={styles.tilesContainer}>
          <div className={styles.tile}>
            <h2>Uncontrolled Form</h2>
            <p>
              <strong>Name:</strong> {uncontrolledForm.name}
            </p>
            <p>
              <strong>Age:</strong> {uncontrolledForm.age}
            </p>
            <p>
              <strong>Email:</strong> {uncontrolledForm.email}
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
              <strong>Picture:</strong>{' '}
              {uncontrolledForm.picture ? (
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
              <strong>Name:</strong> {controlledForm.name}
            </p>
            <p>
              <strong>Age:</strong> {controlledForm.age}
            </p>
            <p>
              <strong>Email:</strong> {controlledForm.email}
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
              <strong>Picture:</strong>{' '}
              {controlledForm.picture ? (
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
