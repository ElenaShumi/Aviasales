import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleSorting, selectSorting } from '../../store/sortingSlice'
// import PropTypes from 'prop-types'

import './ticketTabs.scss'

export default function TicketTabs() {
  const dispatch = useDispatch()
  const sorting = useSelector(selectSorting)

  return (
    <div className="tabs_wrap">
      <ul>
        <li
          className={sorting === 'cheap' ? 'active' : null}
          onClick={() => dispatch(toggleSorting({ name: 'cheap' }))}
        >
          Самый дешевый
        </li>
        <li className={sorting === 'fast' ? 'active' : null} onClick={() => dispatch(toggleSorting({ name: 'fast' }))}>
          Самый быстрый
        </li>
      </ul>
    </div>
  )
}
