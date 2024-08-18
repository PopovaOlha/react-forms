export interface IFormInputs {
  name: string;
  age: string;
  email: string;
  password1: string;
  password2: string;
  gender: string;
  country: string;
  terms: boolean;
  picture: string | null;
}

export interface FormState extends IFormInputs {}

export type RefKeys =
  | 'name'
  | 'age'
  | 'email'
  | 'password1'
  | 'password2'
  | 'gender'
  | 'picture'
  | 'terms'
  | 'country';

export interface FormTileProps {
  title: string;
  formData: {
    name: string;
    age: string;
    email: string;
    password1: string;
    password2: string;
    gender: string;
    terms: boolean;
    pictureURL: string | null;
  };
}

export type FormErrors = {
  [key: string]: string | undefined;
};
