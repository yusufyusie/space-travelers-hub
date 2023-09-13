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
    reserveDragon: (state, action) => {
      console.log(action);
      const newdragon = state.totalDragons.map((dragon) => {
        if (dragon.id !== action.payload) {
          return {
            ...dragon,
          };
        }
        return { ...dragon, reserved: true };
      });
      console.log(newdragon);
      return { ...state, totalDragons: newdragon };
    },
    cancleDragon: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.totalDragons = action.payload.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        flickr_images: dragon.flickr_images[0],
      }));
    });
  },
});

export const { reserveDragon, cancleDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
