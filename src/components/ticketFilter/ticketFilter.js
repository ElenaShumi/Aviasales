import React from 'react'

// import PropTypes from 'prop-types'

import styles from './ticketFilter.module.scss'

export default function TicketFilter() {
  const name = ['All', 'WithoutTransfers', 'OneTransfers', 'TwoTransfers', 'ThreeTransfers']
  const text = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
  const elements = name.map((item, index) => {
    return (
      <li key={index} className={styles.item}>
        <input className={styles.checkbox} type="checkbox" name={item} id={item} />
        <label className={styles.label} htmlFor={item}>
          {text[index]}
        </label>
      </li>
    )
  })

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Количество пересадок</h4>
      <ul className={styles.list}>{elements}</ul>
    </div>
  )
}
