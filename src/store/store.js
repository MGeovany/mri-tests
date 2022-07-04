import { configureStore } from '@reduxjs/toolkit'
import linksSlice from './mrilist/linksSlice'

export const store = configureStore({
  reducer: {
    links: linksSlice
  }
})
