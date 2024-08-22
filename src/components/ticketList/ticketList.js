import React from 'react'

// import PropTypes from 'prop-types'
import Ticket from '../ticket/ticket'

import styles from './ticketList.module.scss'

export default function Ticketlist() {
  return (
    <>
      <ul className={styles.list}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <button className={styles.button}>Показать еще 5 билетов!</button>
    </>
  )
}
