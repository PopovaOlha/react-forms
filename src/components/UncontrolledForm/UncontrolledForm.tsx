import React, { useRef } from 'react';
import styles from './UncontrolledForm.module.css';

const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    console.log(name, email);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input className={styles.input} type="text" id="name" ref={nameRef} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          ref={emailRef}
        />
      </div>
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
