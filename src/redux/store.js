import { configureStore } from '@reduxjs/toolkit';
import DragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    dragon: DragonReducer,
  },
});

export default store;
