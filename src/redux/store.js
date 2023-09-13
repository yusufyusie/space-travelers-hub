import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionsReducer from './mission/MissionsSlice';
import rocketReducer from './rocket/rocketSlice';
import DragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragon: DragonReducer,
  allMissions: missionsReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
