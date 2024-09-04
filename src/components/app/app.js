import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// import PropTypes from 'prop-types'
import logo from '../../img/Logo.png'
import TicketFilter from '../ticketFilter'
import TicketTabs from '../ticketTabs'
import TicketList from '../ticketList'
import { fetchSearchId } from '../../store/ticketsSlice'

import styles from './app.module.css'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles['container_logo']}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <main className={styles['container_main']}>
        <TicketFilter />
        <section className={styles.container_section}>
          <TicketTabs />
          <TicketList />
        </section>
      </main>
    </div>
  )
}
