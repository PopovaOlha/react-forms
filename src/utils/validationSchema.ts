import * as Yup from 'yup';
import { FileValue } from '../types/interfaces';

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),

  age: Yup.number()
    .typeError('Age must be a number')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  password1: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/[0-9]/, 'Password must contain a number')
    .matches(/[!@#$%^&*]/, 'Password must contain a special character'),

  password2: Yup.string()
    .oneOf([Yup.ref('password1')], 'Passwords must match')
    .required('Password confirmation is required'),

  gender: Yup.string().required('Gender is required'),

  terms: Yup.bool()
    .oneOf([true], 'You must accept the terms')
    .required('Terms and conditions must be accepted'),

  picture: Yup.mixed<FileValue>()
    .required('Profile picture is required')
    .test('fileSize', 'File is too large', (value) => {
      if (value instanceof File) {
        return value.size <= 2000000;
      }
      return false;
    })
    .test('fileType', 'Unsupported file format', (value) => {
      if (value instanceof File) {
        return ['image/jpeg', 'image/png'].includes(value.type);
      }
      return false;
    }),
});
