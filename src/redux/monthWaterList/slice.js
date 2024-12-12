import { createSlice } from "@reduxjs/toolkit";

const monthWaterListSlice = createSlice({
  name: "monthWaterList",
  initialState: [], //{date, daylyNorm, servings, planDaylyNorm}
  reducers: {
    setMonthWaterList(state, action) {
      return action.payload;
    },
  },
});

export const { setMonthWaterList } = monthWaterListSlice.actions;
export const monthWaterListReducer = monthWaterListSlice.reducer;
