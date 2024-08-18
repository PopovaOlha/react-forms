export interface IFormInputs {
  name: string;
  age: string | number;
  email: string;
  password1: string;
  password2: string;
  gender: string;
  country: string;
  terms: boolean;
  picture: string | File | null;
}

export interface FormState extends IFormInputs {}

export type FileValue = File;

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
    age: string | number;
    email: string;
    password1: string;
    password2: string;
    gender: string;
    terms: NonNullable<boolean | undefined>;
    pictureURL: string | null;
  };
}

export type FormErrors = {
  [key: string]: string | undefined;
};
