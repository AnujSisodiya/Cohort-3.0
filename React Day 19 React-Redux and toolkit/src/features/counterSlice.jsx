import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  intialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

console.log('slice->', counterSlice);

const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
