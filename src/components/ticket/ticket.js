import React from 'react'
import { format, add } from 'date-fns'
import PropTypes from 'prop-types'

import styles from './ticket.module.scss'

export default function Ticket({ ticket }) {
  const segments = ticket.segments.map((segment) => {
    return (
      <div key={segment.date} className={styles.info}>
        <div className={styles.route}>
          <div className={styles.title}>{`${segment.origin} - ${segment.destination}`}</div>
          <div
            className={styles.text}
          >{`${format(segment.date, 'kk:mm')} - ${format(add(segment.date, { minutes: segment.duration }), 'kk:mm')}`}</div>
        </div>
        <div className={styles.length}>
          <div className={styles.title}>В пути</div>
          <div className={styles.text}>{`${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м`}</div>
        </div>
        <div className={styles.stops}>
          <div className={styles.title}>
            {segment.stops.length === 1
              ? '1 пересадкa'
              : segment.stops.length === 0
                ? 'Без пересадок'
                : `${segment.stops.length} пересадки`}
          </div>
          <div className={styles.text}>{segment.stops.join(', ')}</div>
        </div>
      </div>
    )
  })

  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.price}
        >{`${Math.floor(ticket.price / 1000)}  ${ticket.price % 1000 < 100 ? '0' + (ticket.price % 1000) : ticket.price % 1000} Р`}</div>
        <img className={styles.logo} src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="airlines" />
      </div>
      {segments}
    </li>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.object,
}
