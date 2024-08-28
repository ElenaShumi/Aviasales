import { configureStore } from '@reduxjs/toolkit'

import sortingSlice from './sortingSlice'
import filterSlice from './filterSlice'

export default configureStore({
  reducer: {
    sorting: sortingSlice,
    filter: filterSlice,
  },
})
