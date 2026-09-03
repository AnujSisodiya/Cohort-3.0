import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { api } from '../../../config/api';

export const loginUserAction = createAsyncThunk(
  'auth/login',
  async (credential, thunkApi) => {
    try {
      let res = await api.post('/auth/login', credential);
      localStorage.setItem('accessToken', res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('login failed');
    }
  }
);

export const hydrateUserAction = createAsyncThunk(
  'auth/hydrate',
  async (_, thunkApi) => {
    let token = localStorage.getItem('accessToken');
    try {
      let res = await api.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
      });

      return res.data;
    } catch (error) {
      toast.error('Unauhtorized User');
      return thunkApi.rejectWithValue('Unauhtorized User');
    }
  }
);
