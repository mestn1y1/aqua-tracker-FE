import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodayWater,
  addTodayWater,
  updateTodayWater,
  deleteTodayWater,
} from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const todayWaterListSlice = createSlice({
  name: "todayWaterList",
  initialState: {
    daylyNorm: null,
    amountWaterPerDay: null,
    servings: null,
    percent: null,
    items: [], // {date, amount, curDaylyNorm}
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodayWater.pending, handlePending)
      .addCase(fetchTodayWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.daylyNorm = action.payload.data.daylyNorm;
        state.amountWaterPerDay = action.payload.data.amountWaterPerDay;
        state.servings = action.payload.data.servings;
        state.percent = action.payload.data.percent;
        state.items = action.payload.data.todayWaterList;
      })
      .addCase(fetchTodayWater.rejected, handleRejected)
      .addCase(addTodayWater.pending, handlePending)
      .addCase(addTodayWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload.data);
      })
      .addCase(addTodayWater.rejected, handleRejected)
      .addCase(deleteTodayWater.pending, handlePending)
      .addCase(deleteTodayWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (water) => water.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTodayWater.rejected, handleRejected)
      .addCase(updateTodayWater.pending)
      .addCase(updateTodayWater.fulfilled, (state, action) => {
        state.isLoading = false;
        for (const water of state.items) {
          if (water.id === action.payload.id) {
            water.amount = action.payload.amount;
            break;
          }
        }
      })
      .addCase(updateTodayWater.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.daylyNorm = null;
        state.amountWaterPerDay = null;
        state.servings = null;
        state.percent = null;
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const todayWaterListReducer = todayWaterListSlice.reducer;
