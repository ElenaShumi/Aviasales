import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: { all: false, withoutTransfers: false, oneTransfers: false, twoTransfers: false, threeTransfers: false },
  },
  reducers: {
    toggleFilter(state, action) {
      state.filter[action.payload] = !state.filter[action.payload]
    },
  },
  selectors: {
    selectorFilter: (state) => state.filter,
  },
})

export const { toggleFilter } = filterSlice.actions

export const { selectorFilter } = filterSlice.selectors

export default filterSlice.reducer
