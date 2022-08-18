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
      state.isStop = false
      if (state.sec === 0 && state.min !== 0) {
        state.min -= 1
        state.sec = 59
      }

      if (state.min === 0 && state.sec === 0) {
        state.isStop = true
        return
      }
      state.sec -= 1
    },
    stopTimer: (state) => {
      state.isStop = true
    },
    setTime: (state, { payload }) => {
      const { target, value } = payload
      state[target] = value
    },
  },
})

export const { startTimer, stopTimer, setTime } = timerSlice.actions

export default timerSlice.reducer
