import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4/rockets';

const fetchData = createAsyncThunk('data/fetchData', () => (axios
  .get(baseURL)
  .then((response) => response.data)
));

const initialState = {
  loading: false,
  data: [],
  error: '',
};
