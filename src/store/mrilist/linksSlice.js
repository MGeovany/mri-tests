import { createSlice } from '@reduxjs/toolkit'

export const linksSlice = createSlice({
  name: 'mrilinks',
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      state.push(action.payload)
      // state.units = action.payload
    }
  }
})

export const { addLink } = linksSlice.actions
export const selectLink = (state) => state.mrilinks
export default linksSlice.reducer
