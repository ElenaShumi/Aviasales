import React from 'react'

// import PropTypes from 'prop-types'
import logo from '../../img/Logo.png'
import TicketFilter from '../ticketFilter'
import TicketTabs from '../ticketTabs'
import TicketList from '../ticketList'

import styles from './app.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles['container_logo']}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <main className={styles['container_main']}>
        <TicketFilter />
        <section>
          <TicketTabs />
          <TicketList />
        </section>
      </main>
    </div>
  )
}
