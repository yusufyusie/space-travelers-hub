import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import DragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragon: DragonReducer,
  },
});


export default store;
