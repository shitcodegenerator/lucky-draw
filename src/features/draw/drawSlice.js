import { createSlice } from '@reduxjs/toolkit'

const generateFakeName = () => {
  const randomNameLength = Math.floor(Math.random() * 10 + 5)
  return Math.random()
    .toString(36)
    .substring(2, randomNameLength)
    .replace(/^[0-9]/, '')
}

export const drawSlice = createSlice({
  name: 'draw',
  initialState: {
    attendees: [],
    winner: null,
  },
  reducers: {
    getWinner: (state) => {
      const randomWinnerIndex = Math.floor(Math.random() * 1)
      state.winner = state.attendees[randomWinnerIndex]
    },
    generateFakeData: (state) => {
      let arr = []
      for (let i = 0; i < 20; i++) {
        arr.push({
          id: i,
          name: generateFakeName(),
        })
      }
      state.attendees = arr
    },
  },
})

export const { getWinner, generateFakeData } = drawSlice.actions

export default drawSlice.reducer
