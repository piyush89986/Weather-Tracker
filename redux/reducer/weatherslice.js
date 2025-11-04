import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (res.status !== 200) {
        throw new Error("Failed to fetch weather data");
      }
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return rejectWithValue("City not found! Please check the name.");
      } else {
        return rejectWithValue("Something went wrong. Try again later.");
      }
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
