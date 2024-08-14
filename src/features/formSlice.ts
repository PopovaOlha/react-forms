import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/interfaces';

const initialState: FormState = {
  name: '',
  email: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FormState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
