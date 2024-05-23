
import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../stores/types/IAuthState';
import { login } from '../actions/auth';

const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
};


export const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
        state.isAuthenticated = false;
        state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
    })
  },
});

const { actions, reducer } = authenticationSlice;
export const authentication = reducer;



