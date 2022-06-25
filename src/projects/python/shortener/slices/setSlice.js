import { createSlice } from '@reduxjs/toolkit'

export const setSlice = createSlice({
  name: 'set',
  initialState: {
    url: '',
    isURL: false
  },
  reducers: {
    set: (state, action) => {
      state.url = action.payload.url
      state.isURL = action.payload.truely
    },
  },
})

export const { set } = setSlice.actions