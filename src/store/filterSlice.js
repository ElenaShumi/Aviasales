import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: { all: true, withoutTransfers: true, oneTransfers: true, twoTransfers: true, threeTransfers: true },
  },
  reducers: {
    toggleFilter(state, action) {
      state.filter[action.payload] = !state.filter[action.payload]
    },
    allFilter(state, action) {
      if (action.payload) {
        state.filter = {
          all: true,
          withoutTransfers: true,
          oneTransfers: true,
          twoTransfers: true,
          threeTransfers: true,
        }
      } else {
        state.filter = {
          all: false,
          withoutTransfers: false,
          oneTransfers: false,
          twoTransfers: false,
          threeTransfers: false,
        }
      }
    },
  },
  selectors: {
    selectorFilter: (state) => state.filter,
  },
})

export const { toggleFilter, allFilter } = filterSlice.actions

export const { selectorFilter } = filterSlice.selectors

export default filterSlice.reducer
