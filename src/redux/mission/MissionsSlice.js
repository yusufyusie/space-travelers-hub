import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_MISSIONS, API_MISSION } from './missionAPI';

const initialState = {
  allMissions: [],
  loading: false,
  error: '',
};

export const getAllMissions = createAsyncThunk(GET_MISSIONS, async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_MISSION);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const missionsSlice = createSlice({
  name: 'allMissions',
  initialState,
  reducers: {},
  extraReducers() {},
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
