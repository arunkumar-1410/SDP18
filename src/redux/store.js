import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './StatsSlice';

export const store = configureStore({
  reducer: {
    stats: statsReducer
  }
});
