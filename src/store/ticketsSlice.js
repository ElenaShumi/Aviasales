import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const setError = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}

const ticketsSlice = createSlice({
  name: 'tickets',

  initialState: {
    searchId: '',
    tickets: [],
    status: null,
    error: null,
  },

  reducers: (create) => ({
    fetchSearchId: create.asyncThunk(
      async function (_, { rejectWithValue, dispatch }) {
        try {
          const response = await fetch('https://aviasales-test-api.kata.academy/search')
          if (!response.ok) {
            throw new Error('Server Error!')
          }
          const data = await response.json()

          dispatch(fetchTickets(data.searchId))

          return data.searchId
        } catch (error) {
          return rejectWithValue(error.message)
        }
      },
      {
        fulfilled: (state, action) => {
          state.searchId = action.payload
        },
        rejected: setError,
      }
    ),

    fetchTickets: create.asyncThunk(
      async function (id, { rejectWithValue }) {
        try {
          const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
          if (!response.ok) {
            throw new Error('No tickets found. Server Error!')
          }
          const data = await response.json()

          return data.tickets
        } catch (error) {
          return rejectWithValue(error.message)
        }
      },
      {
        pending: (state) => {
          state.status = 'loading'
          state.error = null
        },
        fulfilled: (state, action) => {
          state.status = 'resolved'
          state.tickets = action.payload
        },
        rejected: setError,
      }
    ),
  }),

  selectors: {
    selectorTickets: (state) => state.tickets,
    selectorId: (state) => state.searchId,
  },
})

export const { fetchSearchId, fetchTickets } = ticketsSlice.actions

export const { selectorTickets, selectorId } = ticketsSlice.selectors

export default ticketsSlice.reducer
