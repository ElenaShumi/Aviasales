import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleSorting, selectorSorting } from '../../store/sortingSlice'
import { selectorTickets, sorting } from '../../store/ticketsSlice'

import './ticketTabs.scss'

export default function TicketTabs() {
  const dispatch = useDispatch()
  const tickets = useSelector(selectorTickets)
  const sort = useSelector(selectorSorting)
  let lengthTickets = tickets.length

  useEffect(() => {
    dispatch(sorting(sort))
  }, [sort, lengthTickets])

  return (
    <div className="tabs_wrap">
      <ul>
        <li
          className={sort === 'cheap' ? 'active' : null}
          onClick={() => {
            dispatch(toggleSorting({ name: 'cheap' }))
            // dispatch(sorting(sort))
          }}
        >
          Самый дешевый
        </li>
        <li
          className={sort === 'fast' ? 'active' : null}
          onClick={() => {
            dispatch(toggleSorting({ name: 'fast' }))
            // dispatch(sorting(sort))
          }}
        >
          Самый быстрый
        </li>
      </ul>
    </div>
  )
}
