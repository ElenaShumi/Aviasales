import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import BarLoader from 'react-spinners/BarLoader'

import Ticket from '../ticket/ticket'
import { fetchSearchId, selectorTickets, selectorStatus } from '../../store/ticketsSlice'

import styles from './ticketList.module.scss'

export default function Ticketlist() {
  const [quantity, setQuantity] = useState(5)
  const dispatch = useDispatch()
  const tickets = useSelector(selectorTickets)
  const status = useSelector(selectorStatus)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  let elemnts = tickets.map((item, id) => {
    if (id < quantity) {
      return <Ticket key={uniqid()} ticket={item} />
    }
  })
  // console.log(tickets.length)
  return (
    <>
      <BarLoader className={styles.loader} color="#2196F3" width="96%" loading={status === 'loading'} />
      <ul className={styles.list}>{elemnts}</ul>
      <button className={styles.button} onClick={() => setQuantity(quantity + 5)}>
        Показать еще 5 билетов!
      </button>
    </>
  )
}
