import React, { useState } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateControlledForm } from '../../features/formSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/validationSchema';
import styles from './ControlledForm.module.css';
import { IFormInputs } from '../../types/interfaces';
import { selectCountries } from '../../features/selectors';
import { useNavigate } from 'react-router-dom';
import { passwordStrength } from '../../utils/passwordStrength';
import {
  STRENGTH_MODERATE,
  STRENGTH_STRONG,
  STRENGTH_WEAK,
} from '../../constants/constants';

const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result as string);
      } else {
        reject(new Error('Error converting file to base64'));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const ControlledForm: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const navigate = useNavigate();
  const [pictureFile, setPictureFile] = useState<File | null>(null);
  const [pictureURL, setPictureURL] = useState<string | null>(null);
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState<number>(0);
  const [passwordStrengthClass, setPasswordStrengthClass] =
    useState<string>('weak');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema) as Resolver<IFormInputs>,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    data.age = typeof data.age === 'number' ? data.age.toString() : data.age;

    if (pictureFile) {
      try {
        data.picture = await convertToBase64(pictureFile);
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }

    dispatch(updateControlledForm({ ...data, pictureURL }));
    navigate('/', { state: { newData: data } });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    setPictureFile(file);

    if (file) {
      setValue('picture', file);
      try {
        const base64 = await convertToBase64(file);
        setPictureURL(base64);
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    } else {
      setValue('picture', null);
      setPictureURL(null);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
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
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input className={styles.input} id="name" {...register('name')} />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="age">
          Age:
        </label>
        <input
          className={styles.input}
          id="age"
          type="number"
          {...register('age', { valueAsNumber: true })}
        />
        {errors.age && (
          <p className={styles.errorMessage}>{errors.age.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input className={styles.input} id="email" {...register('email')} />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password1">
          Password:
        </label>
        <input
          className={styles.input}
          type="password"
          id="password1"
          {...register('password1', { onChange: handlePasswordChange })}
        />
        {errors.password1 && (
          <p className={styles.errorMessage}>{errors.password1.message}</p>
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
          {...register('password2')}
        />
        {errors.password2 && (
          <p className={styles.errorMessage}>{errors.password2.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="gender">
          Gender:
        </label>
        <select className={styles.input} id="gender" {...register('gender')}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className={styles.errorMessage}>{errors.gender.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="country">
          Country:
        </label>
        <select className={styles.input} id="country" {...register('country')}>
          <option value="">Select...</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className={styles.errorMessage}>{errors.country.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="terms">
          <input type="checkbox" id="terms" {...register('terms')} />
          Accept Terms and Conditions
        </label>
        {errors.terms && (
          <p className={styles.errorMessage}>{errors.terms.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="picture">
          Upload Picture:
        </label>
        <input
          className={styles.input}
          type="file"
          id="picture"
          accept="image/*"
          onChange={handleFileChange}
        />
        {errors.picture && (
          <p className={styles.errorMessage}>{errors.picture.message}</p>
        )}
        {pictureURL && (
          <div className={styles.picturePreview}>
            <img src={pictureURL} alt="Preview" />
          </div>
        )}
      </div>
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
