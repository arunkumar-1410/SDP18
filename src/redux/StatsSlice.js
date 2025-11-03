import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  farmers: 2500,
  buyers: 850,
  products: 15000,
  orders: 45000,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {}
});

export default statsSlice.reducer;
