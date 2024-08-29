import { createSlice } from '@reduxjs/toolkit'

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sorting: 'cheap',
  },
  reducers: {
    toggleSorting(state, action) {
      state.sorting = action.payload.name
    },
  },
  selectors: {
    selectorSorting: (state) => state.sorting,
  },
})

export const { toggleSorting } = sortingSlice.actions

export const { selectorSorting } = sortingSlice.selectors
export default sortingSlice.reducer
