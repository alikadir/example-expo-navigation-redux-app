import { configureStore } from '@reduxjs/toolkit'
import liveStreamReducer from '../features/liveStream/liveStreamSlice'
import snakeReducer from '../features/snake/snakeSlice'

export const store = configureStore({
  reducer: {
    snake: snakeReducer,
    liveStream: liveStreamReducer
  }
})
