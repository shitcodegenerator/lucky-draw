import { configureStore } from '@reduxjs/toolkit'
import timerReducer from '@/features/timer/timerSlice'
import drawReducer from '@/features/draw/drawSlice'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    draw: drawReducer,
  },
})
