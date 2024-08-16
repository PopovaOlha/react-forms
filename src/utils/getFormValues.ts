import { RefObject } from 'react';

export type FormValues = {
  name: string;
  age: string;
  email: string;
  password1: string;
  password2: string;
  gender: string;
  terms: boolean;
  picture: File | null;
};

export const getFormValues = (refs: {
  name: RefObject<HTMLInputElement>;
  age: RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  password1: RefObject<HTMLInputElement>;
  password2: RefObject<HTMLInputElement>;
  gender: RefObject<HTMLSelectElement>;
  terms: RefObject<HTMLInputElement>;
  picture: RefObject<HTMLInputElement>;
}): FormValues => {
  return {
    name: refs.name.current?.value.trim() || '',
    age: refs.age.current?.value.trim() || '',
    email: refs.email.current?.value.trim() || '',
    password1: refs.password1.current?.value || '',
    password2: refs.password2.current?.value || '',
    gender: refs.gender.current?.value || '',
    terms: refs.terms.current?.checked || false,
    picture: refs.picture.current?.files?.[0] || null,
  };
};
