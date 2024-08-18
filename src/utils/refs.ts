import { useRef } from 'react';

export const useFormRefs = () => {
  return {
    name: useRef<HTMLInputElement>(null),
    age: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password1: useRef<HTMLInputElement>(null),
    password2: useRef<HTMLInputElement>(null),
    gender: useRef<HTMLSelectElement>(null),
    country: useRef<HTMLSelectElement>(null),
    terms: useRef<HTMLInputElement>(null),
    picture: useRef<HTMLInputElement>(null),
  };
};
