import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4/rockets';

const fetchRocket = createAsyncThunk('rockets/fetchRocket', () => (axios
  .get(baseURL)
  .then((response) => response.data)
));

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRocket.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
        state.error = action.payload.length === 0 ? 'No result found!' : '';
      })
      .addCase(fetchRocket.rejected, (state, action) => {
        state.loading = false;
        state.rockets = [];
        state.error = action.error.message;
      });
  },
});

export default rocketSlice.reducer;
export { fetchRocket };
export const { reserveRocket } = rocketSlice.actions;
