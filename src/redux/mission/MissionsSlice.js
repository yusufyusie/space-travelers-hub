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
  reducers: {
    joinMission: (state, action) => {
      const newMissionsState = state.allMissions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return mission.joined === true ? { ...mission, joined: false }
          : { ...mission, joined: true };
      });
      state.allMissions = newMissionsState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMissions.fulfilled, (state, action) => {
        state.loading = false;
        const missionArray = [];
        action.payload.forEach((m) => {
          const mission = {
            mission_id: m.mission_id,
            mission_name: m.mission_name,
            description: m.description,
          };
          missionArray.push(mission);
        });
        state.allMissions = missionArray;
      })
      .addCase(getAllMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
