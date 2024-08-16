import React from 'react';
import styles from '../UncontrolledForm/UncontrolledForm.module.css';

type Errors = { [key: string]: string };

export const ErrorMessages: React.FC<{ errors: Errors }> = ({ errors }) => {
  return (
    <>
      {Object.keys(errors).map((key) => (
        <p key={key} className={styles.errorMessage}>
          {errors[key]}
        </p>
      ))}
    </>
  );
};
