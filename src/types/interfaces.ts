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
