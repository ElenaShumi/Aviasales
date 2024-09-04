import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const ticketsSlice = createSlice({
  name: 'tickets',

  initialState: {
    searchId: '',
    tickets: [],
    status: null,
    error: null,
  },

  reducers: (create) => ({
    stopLoading: create.reducer((state) => {
      state.status = 'resolved'
    }),

    sorting: create.reducer((state, action) => {
      const arr = [...state.tickets]

      if (action.payload === 'cheap') {
        state.tickets = arr.sort((prevTicket, nextTicket) => prevTicket.price - nextTicket.price)
      } else if (action.payload === 'fast') {
        state.tickets = arr.sort((prevTicket, nextTicket) => {
          let minFirst
          let minTwo

          if (prevTicket.segments[0].duration < prevTicket.segments[1].duration) {
            minFirst = prevTicket.segments[0].duration
          } else minFirst = prevTicket.segments[1].duration

          if (nextTicket.segments[0].duration < nextTicket.segments[1].duration) {
            minTwo = nextTicket.segments[0].duration
          } else minTwo = nextTicket.segments[1].duration

          return minFirst - minTwo
        })
      }
    }),

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
      }
    ),

    fetchTickets: create.asyncThunk(
      async function (id, { dispatch }) {
        const arr = []
        try {
          const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)

          if (response.status === 500) {
            throw new Error('No tickets found. Server Error!')
          }

          const data = await response.json()
          arr.push(...data.tickets)
          if (!data.stop) {
            arr.push(...dispatch(fetchTickets(id)))
          } else if (data.stop) {
            dispatch(stopLoading())
          }
        } catch (error) {
          if (error.name === 'Error') arr.push(...dispatch(fetchTickets(id)))
        }

        return arr
      },
      {
        pending: (state) => {
          state.status = 'loading'
          state.error = null
        },
        fulfilled: (state, action) => {
          state.tickets.push(...action.payload)
          // sortingCheap(state.tickets)
        },
      }
    ),
  }),

  selectors: {
    selectorTickets: (state) => state.tickets,
    selectorId: (state) => state.searchId,
    selectorStatus: (state) => state.status,
  },
})

export const { fetchSearchId, fetchTickets, stopLoading, sorting } = ticketsSlice.actions

export const { selectorTickets, selectorId, selectorStatus } = ticketsSlice.selectors

export default ticketsSlice.reducer
