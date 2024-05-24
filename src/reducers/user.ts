import { createSlice} from '@reduxjs/toolkit';
import { IUserPreferenceState } from '../stores/types/IAuthState';

const initialState: IUserPreferenceState = {
  loading: false,
  error: null,
  initialized: false,
  preferences: {
    theme: 'default',
    locale: 'en',
    onboarded: false,
  },
};

const userPreferenceSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  },
});

const {
} = userPreferenceSlice.actions;

export const userPreference = userPreferenceSlice.reducer;
