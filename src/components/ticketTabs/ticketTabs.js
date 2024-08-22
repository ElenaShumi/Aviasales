import React from 'react'

// import PropTypes from 'prop-types'

import './ticketTabs.scss'

export default function TicketTabs() {
  return (
    <div className="tabs_wrap">
      <ul>
        <li className="active">Самый дешевый</li>
        <li>Самый быстрый</li>
      </ul>
    </div>
  )
}
