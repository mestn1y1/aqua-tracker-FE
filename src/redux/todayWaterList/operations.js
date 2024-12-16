import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://aqua-tracker-be.onrender.com";

// GET @ /water
export const fetchTodayWater = createAsyncThunk(
  "todayWater/fetchWater",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(URL + "/water");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /water
export const addTodayWater = createAsyncThunk(
  "todayWater/addWater",
  async (water, thunkAPI) => {
    try {
      const response = await axios.post(URL + "/water", water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /water/:id
export const deleteTodayWater = createAsyncThunk(
  "todayWater/deleteWater",
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/water/${waterId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

/*
 * PATCH @ /update
 * headers: Authorization: Bearer token
 */
export const updateTodayWater = createAsyncThunk(
  "todayWater/updateWater",
  async (water, thunkAPI) => {
    try {
      const res = await axios.post(`${URL}/water/${water.waterId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
