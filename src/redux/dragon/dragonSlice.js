import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('user/fetchUsers', async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/dragons');
      return response.data;
    } catch (error) {
      return error.message;
    }
  });
  
const initialState = {
    totalDragons: [],
}
export const dragonSlice = createSlice({
    name: 'dragon',
    initialState,
    reducers: {
        addBook: () => {
         console.log("hi");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDragons.fulfilled, (state, action) => {
        console.log("fulfiled");
        console.log(action.payload);
        });
        builder.addCase(fetchDragons.rejected, (state, action) => {
            console.log(action);
            });
            builder.addCase(fetchDragons.pending, (state, action) => {
                console.log(action);
                });
    }
  });

  export const { addBook } = dragonSlice.actions;
export default dragonSlice.reducer;