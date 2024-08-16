import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/interfaces';

interface FormsState {
  controlledForm: Omit<FormState, 'picture'> & { pictureURL: string | null };
  uncontrolledForm: Omit<FormState, 'picture'> & { pictureURL: string | null };
}

const initialState: FormsState = {
  controlledForm: {
    name: '',
    age: '',
    email: '',
    password1: '',
    password2: '',
    gender: '',
    country: '',
    terms: false,
    pictureURL: null,
  },
  uncontrolledForm: {
    name: '',
    age: '',
    email: '',
    password1: '',
    password2: '',
    gender: '',
    country: '',
    terms: false,
    pictureURL: null,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateControlledForm: (
      state,
      action: PayloadAction<
        Omit<FormState, 'picture'> & { pictureURL: string | null }
      >,
    ) => {
      state.controlledForm = action.payload;
    },
    updateUncontrolledForm: (
      state,
      action: PayloadAction<
        Omit<FormState, 'picture'> & { pictureURL: string | null }
      >,
    ) => {
      state.uncontrolledForm = action.payload;
    },
  },
});

export const { updateControlledForm, updateUncontrolledForm } =
  formSlice.actions;
export default formSlice.reducer;
