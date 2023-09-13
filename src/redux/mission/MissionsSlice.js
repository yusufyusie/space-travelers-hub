import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
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
  reducers: {
    joinMission: (state, action) => {
      const newMissionsState = state.allMissions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return mission.reserved === true ? { ...mission, reserved: false }
          : { ...mission, reserved: true };
      });
      state.missions = newMissionsState;
    },
  },
  extraReducers() {},
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
