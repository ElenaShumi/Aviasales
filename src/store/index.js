import { configureStore } from '@reduxjs/toolkit'

import sortingSlice from './sortingSlice'
import filterSlice from './filterSlice'
import ticketsSlice from './ticketsSlice'

export default configureStore({
  reducer: {
    sorting: sortingSlice,
    filter: filterSlice,
    tickets: ticketsSlice,
  },
})
