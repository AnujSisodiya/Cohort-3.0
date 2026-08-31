import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    incrementByValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
