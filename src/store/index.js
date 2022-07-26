import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './demo';

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});
