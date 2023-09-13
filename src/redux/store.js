import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionsReducer from './mission/MissionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
