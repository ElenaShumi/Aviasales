import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import PropTypes from 'prop-types'
import uniqid from 'uniqid'

import Ticket from '../ticket/ticket'
import { fetchSearchId, selectorTickets } from '../../store/ticketsSlice'

import styles from './ticketList.module.scss'

export default function Ticketlist() {
  const dispatch = useDispatch()
  const tickets = useSelector(selectorTickets)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  const elemnts = tickets.map((item) => <Ticket key={uniqid()} ticket={item} />)
  return (
    <>
      <ul className={styles.list}>{elemnts}</ul>
      <button className={styles.button}>Показать еще 5 билетов!</button>
    </>
  )
}
