import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    min: 1,
    sec: 15,
    isStop: true,
  },
  reducers: {
    startTimer: (state) => {
      const isZeroSec = state.sec === 0 && state.min !== 0
      const isTimesUp = state.min === 0 && state.sec === 0

      if (isZeroSec) {
        state.min -= 1
        state.sec = 59
      }

      if (isTimesUp) {
        state.isStop = true
        return
      }

      state.sec -= 1
    },
    stopTimerStatus: (state) => {
      state.isStop = true
    },
    startTimerStatus: (state) => {
      state.isStop = false
    },
    setTime: (state, { payload }) => {
      const { target, value } = payload
      state[target] = value
    },
  },
})

export const { startTimer, stopTimerStatus, setTime, startTimerStatus } = timerSlice.actions

export default timerSlice.reducer
