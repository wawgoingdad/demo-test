import { loginService } from '../services/authService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../models/userSchema';


export const login = createAsyncThunk(
    'auth/login',
    async (credentials: User, { rejectWithValue }) => {
      try {
        const response = await loginService(credentials);
        return response.data;
      } catch (error: any) {
        const errorPayload = error?.response?.data || 'Unknown error. Please try again later';
        return rejectWithValue(errorPayload);
      }
    }
);