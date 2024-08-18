import React, { useMemo } from 'react';
import styles from './FormTile.module.css';
import { FormTileProps } from '../../types/interfaces';

const FormTile: React.FC<FormTileProps> = ({ title, formData }) => {
  const createImageURL = (fileURL: string | null) => {
    if (fileURL) {
      return fileURL;
    }
    return '';
  };

  const imageURL = useMemo(
    () => createImageURL(formData.pictureURL),
    [formData.pictureURL],
  );

  return (
    <div className={styles.tile}>
      <h2>{title}</h2>
      <p>
        <strong>Name:</strong> {formData.name || 'N/A'}
      </p>
      <p>
        <strong>Age:</strong> {formData.age || 'N/A'}
      </p>
      <p>
        <strong>Email:</strong> {formData.email || 'N/A'}
      </p>
      <p>
        <strong>Password:</strong> {formData.password1 ? '******' : 'N/A'}
      </p>
      <p>
        <strong>Confirm Password:</strong>{' '}
        {formData.password2 ? '******' : 'N/A'}
      </p>
      <p>
        <strong>Gender:</strong> {formData.gender || 'N/A'}
      </p>
      <p>
        <strong>Terms Accepted:</strong> {formData.terms ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Picture:</strong>
        {formData.pictureURL ? (
          <img src={imageURL} alt="Uploaded" className={styles.image} />
        ) : (
          'No file uploaded'
        )}
      </p>
    </div>
  );
};

export default FormTile;
