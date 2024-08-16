import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/interfaces';

interface FormsState {
  controlledForm: FormState;
  uncontrolledForm: FormState;
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
    picture: null,
  },
  uncontrolledForm: {
    name: '',
    age: '',
    email: '',
    password1: '',
    password2: '',
    country: '',
    gender: '',
    terms: false,
    picture: null,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateControlledForm: (state, action: PayloadAction<FormState>) => {
      state.controlledForm = action.payload;
    },
    updateUncontrolledForm: (state, action: PayloadAction<FormState>) => {
      state.uncontrolledForm = action.payload;
    },
  },
});

export const { updateControlledForm, updateUncontrolledForm } =
  formSlice.actions;
export default formSlice.reducer;
