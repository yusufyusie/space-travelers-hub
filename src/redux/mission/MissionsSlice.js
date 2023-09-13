import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allMissions: [],
  isLoading: false,
  error: undefined,
};

const missionsSlice = createSlice({
  name: 'allMissions',
  initialState,
  reducers: {},
  extraReducers() {},
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
