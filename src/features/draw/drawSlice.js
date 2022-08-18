import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TIMEOUT_MS } from '../../constants/request'

/** 假名產生 */
const generateFakeName = () => {
  const randomNameLength = Math.floor(Math.random() * 10 + 5)
  return Math.random()
    .toString(36)
    .substring(2, randomNameLength)
    .replace(/^[0-9]/, '')
}

/** 取得假用戶 api */
export const fetchAttendees = createAsyncThunk('draw/fetchAttendees', async () => {
  try {
    const res = await axios.get('https://randomuser.me/api/?results=20&', {
      timeout: TIMEOUT_MS,
    })

    return res.data.results
  } catch {
    return Promise.reject()
  }
})

export const drawSlice = createSlice({
  name: 'draw',
  initialState: {
    attendees: [],
    winner: null,
    isLoading: false,
  },
  reducers: {
    /** 抽獎 */
    getWinner: (state) => {
      const randomWinnerIndex = Math.floor(Math.random() * 20)
      console.log(randomWinnerIndex)
      state.winner = state.attendees[randomWinnerIndex]
    },
    /** 產生假資料(當作api fail時得替代方案) */
    generateFakeData: (state) => {
      let arr = []
      for (let i = 0; i < 20; i++) {
        arr.push({
          id: i,
          name: generateFakeName(),
          avatar: '',
        })
      }
      state.attendees = arr
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAttendees.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAttendees.fulfilled, (state, action) => {
        state.attendees = action.payload.map((i) => ({
          id: i.login.uuid,
          name: i.name.first,
          avatar: i.picture.large,
        }))
        state.isLoading = false
      })
      .addCase(fetchAttendees.rejected, (state) => {
        drawSlice.caseReducers.generateFakeData(state)
        state.isLoading = false
      })
  },
})

export const { getWinner, generateFakeData } = drawSlice.actions

export default drawSlice.reducer
