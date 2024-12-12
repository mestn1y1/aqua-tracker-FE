import { createSlice } from "@reduxjs/toolkit";

const todayWaterListSlice = createSlice({
  name: "todayWaterList",
  initialState: [], // {date, amount, curDaylyNorm}
  reducers: {
    setTodayWaterList(state, action) {
      return action.payload;
    },
  },
});

export const { setTodayWaterList } = todayWaterListSlice.actions;
export const todayWaterListReducer = todayWaterListSlice.reducer;
