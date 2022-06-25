import { configureStore } from '@reduxjs/toolkit'
import { setSlice } from '../projects/python/shortener/slices/setSlice'
// import { setSlice } from '../slices/setSlice'

export const store = configureStore({
  reducer: {
    set: setSlice.reducer
  },
})