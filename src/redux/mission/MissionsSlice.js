import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allMissions: [],
  loading: false,
  error: '',
};

export const getAllMissions = createAsyncThunk();

const missionsSlice = createSlice({
  name: 'allMissions',
  initialState,
  reducers: {},
  extraReducers() {},
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
