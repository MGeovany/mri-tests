import { createSlice } from '@reduxjs/toolkit'

export const linksSlice = createSlice({
  name: 'mrilinks',
  initialState: [
    {
      id: '1',
      url: 'https://ad1-il-000353.ooh-prod.linksvc.com:2443/'
    },
    {
      id: '2',
      url: 'https://ad1-il-000349.ooh-prod.linksvc.com:2443/'
    }
  ],
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
