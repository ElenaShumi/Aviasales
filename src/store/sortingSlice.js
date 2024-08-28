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
    selectSorting: (state) => state.sorting,
  },
})

export const { toggleSorting } = sortingSlice.actions

export const { selectSorting } = sortingSlice.selectors
export default sortingSlice.reducer
