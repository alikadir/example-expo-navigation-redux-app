import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const scannerSlice = createSlice({
  name: 'scanner',
  initialState,
  reducers: {
    addBarcode: (state, action) => {
      state.list.push(action.payload)
    }
  }
})

export const { addBarcode } = scannerSlice.actions

export default scannerSlice.reducer
