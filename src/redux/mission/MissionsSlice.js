import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { GET_MISSIONS, API_MISSION } from './missionAPI';

const initialState = {
  allMissions: [],
  loading: false,
  error: '',
};

export const getAllMissions = createAsyncThunk(GET_MISSIONS, async (_name, thunkAPI) => {
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
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const missionsArray = [];
        action.payload.forEach((item) => {
          const mission = {
            mission_id: item.mission_id,
            mission_name: item.mission_name,
            description: item.description,
          };
          missionsArray.push(mission);
        });
        state.missions = missionsArray;
      })
      .addCase(getAllMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
