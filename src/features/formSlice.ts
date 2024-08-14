import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/interfaces';

interface FormsState {
  controlledForm: FormState;
  uncontrolledForm: FormState;
}

const initialState: FormsState = {
  controlledForm: {
    name: '',
    email: '',
  },
  uncontrolledForm: {
    name: '',
    email: '',
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
