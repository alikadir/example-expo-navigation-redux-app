import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  positionList: [
    { x: 20, y: 20 },
    { x: 250, y: 20 },
    { x: 250, y: 80 },
    { x: 100, y: 80 },
    { x: 100, y: 130 },
    { x: 70, y: 130 },
    { x: 70, y: 50 },
  ],
  canvasWidth: 0,
  canvasHeight: 0,
};

export const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    changeDimensions: (state, action) => {
      state.canvasWidth = action.payload.canvasWidth;
      state.canvasHeight = action.payload.canvasHeight;
    },
  },
});

export const { changeDimensions } = snakeSlice.actions;

export default snakeSlice.reducer;
