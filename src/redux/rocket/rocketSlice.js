import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4/rockets';

const fetchRocket = createAsyncThunk('rocket/fetchRocket', () => (axios
  .get(baseURL)
  .then((response) => response.data)
));

const initialState = {
  loading: false,
  rocket: [],
  error: '',
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRocket.fulfilled, (state, action) => {
        state.loading = false;
        state.rocket = action.payload;
        state.error = action.payload.length === 0 ? 'No result found!' : '';
      })
      .addCase(fetchRocket.rejected, (state, action) => {
        state.loading = false;
        state.rocket = [];
        state.error = action.error.message;
      });
  },
});

export default rocketSlice.reducer;
export { fetchRocket };
