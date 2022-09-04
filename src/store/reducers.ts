
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  incrementAmount: number
}

const initialState: CounterState = {
  value: 0,
  incrementAmount : 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount
    },
    decrement: (state) => {
      state.value -= state.incrementAmount
    },
    changeState: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, changeState } = counterSlice.actions

export default counterSlice.reducer