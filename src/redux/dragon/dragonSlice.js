import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalDragons: [],
};

export const fetchDragons = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/dragons');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.totalDragons = action.payload;
    });
  },
});

export const { addBook } = dragonSlice.actions;
export default dragonSlice.reducer;
