import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUncontrolledForm } from '../../features/formSlice';
import { useFormRefs } from '../../utils/refs';
import { validateField } from '../../utils/validation';
import { ErrorMessages } from '../../components/ErrorMessages/ErrorMessages';
import styles from './UncontrolledForm.module.css';
import { RefKeys } from '../../types/interfaces';
import { selectCountries } from '../../features/selectors';
import { passwordStrength } from '../../utils/passwordStrength';
import {
  STRENGTH_MODERATE,
  STRENGTH_STRONG,
  STRENGTH_WEAK,
} from '../../constants/constants';

const UncontrolledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refs = useFormRefs();
  const countries = useSelector(selectCountries);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [pictureURL, setPictureURL] = useState<string | null>(null);
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState<number>(0);
  const [passwordStrengthClass, setPasswordStrengthClass] =
    useState<string>('weak');

  const convertToBase64 = (
    file: File,
    callback: (base64String: string) => void,
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = (Object.keys(refs) as RefKeys[]).every((key) => {
      validateField(key, refs, setErrors);
      return !errors[key];
    });

    if (!isValid) return;

    const pictureFile = refs.picture.current?.files?.[0] || null;
    let pictureURL: string | null = null;

    if (pictureFile) {
      await new Promise<void>((resolve) => {
        convertToBase64(pictureFile, (base64String) => {
          pictureURL = base64String;
          resolve();
        });
      });
    }

    dispatch(
      updateUncontrolledForm({
        name: refs.name.current?.value || '',
        email: refs.email.current?.value || '',
        age: refs.age.current?.value || '',
        password1: refs.password1.current?.value || '',
        password2: refs.password2.current?.value || '',
        gender: refs.gender.current?.value || '',
        terms: refs.terms.current?.checked || false,
        pictureURL: pictureURL || null,
        country: refs.country.current?.value || '',
      }),
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) ref.current.value = '';
    });

    navigate('/');
  };

  const handlePasswordChange = () => {
    const passwordValue = refs.password1.current?.value || '';
    const strength = passwordStrength(passwordValue);

    let strengthLevel = STRENGTH_WEAK.level;
    let strengthClass = STRENGTH_WEAK.class;

    if (strength === 'Moderate') {
      strengthLevel = STRENGTH_MODERATE.level;
      strengthClass = STRENGTH_MODERATE.class;
    } else if (strength === 'Strong') {
      strengthLevel = STRENGTH_STRONG.level;
      strengthClass = STRENGTH_STRONG.class;
    }

    setPasswordStrengthLevel(strengthLevel);
    setPasswordStrengthClass(strengthClass);
    validateField('password1', refs, setErrors);
  };
  const handleFileChange = () => {
    validateField('picture', refs, setErrors);
    const file = refs.picture.current?.files?.[0] || null;
    if (file) {
      convertToBase64(file, (base64String) => {
        setPictureURL(base64String);
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          ref={refs.name}
          onChange={() => validateField('name', refs, setErrors)}
        />
        {errors.name && <ErrorMessages errors={{ name: errors.name }} />}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="age">
          Age:
        </label>
        <input
          className={styles.input}
          type="number"
          id="age"
          ref={refs.age}
          onChange={() => validateField('age', refs, setErrors)}
        />
        {errors.age && <ErrorMessages errors={{ age: errors.age }} />}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          ref={refs.email}
          onChange={() => validateField('email', refs, setErrors)}
        />
        {errors.email && <ErrorMessages errors={{ email: errors.email }} />}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password1">
          Password:
        </label>
        <input
          className={styles.input}
          type="password"
          id="password1"
          ref={refs.password1}
          onChange={handlePasswordChange}
        />
        {errors.password1 && (
          <ErrorMessages errors={{ password1: errors.password1 }} />
        )}
        <div className={styles.passwordStrength}>
          <div
            className={`${styles.strengthIndicator} ${styles[passwordStrengthClass]}`}
            style={{ width: `${passwordStrengthLevel}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password2">
          Confirm Password:
        </label>
        <input
          className={styles.input}
          type="password"
          id="password2"
          ref={refs.password2}
          onChange={() => validateField('password2', refs, setErrors)}
        />
        {errors.password2 && (
          <ErrorMessages errors={{ password2: errors.password2 }} />
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="gender">
          Gender:
        </label>
        <select
          className={styles.input}
          id="gender"
          ref={refs.gender}
          onChange={() => validateField('gender', refs, setErrors)}
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <ErrorMessages errors={{ gender: errors.gender }} />}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="country">
          Country:
        </label>
        <select
          className={styles.input}
          id="country"
          ref={refs.country}
          onChange={() => validateField('country', refs, setErrors)}
        >
          <option value="">Select...</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <ErrorMessages errors={{ country: errors.country }} />
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            ref={refs.terms}
            onChange={() => validateField('terms', refs, setErrors)}
          />
          Accept Terms and Conditions
        </label>
        {errors.terms && <ErrorMessages errors={{ terms: errors.terms }} />}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="picture">
          Upload Picture:
        </label>
        <input
          className={styles.input}
          type="file"
          id="picture"
          ref={refs.picture}
          onChange={handleFileChange}
        />
        {errors.picture && (
          <ErrorMessages errors={{ picture: errors.picture }} />
        )}
        {pictureURL && <div className={styles.picturePreview}></div>}
      </div>
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
