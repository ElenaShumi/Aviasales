import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'
import BarLoader from 'react-spinners/BarLoader'

import Ticket from '../ticket/ticket'
import { selectorTickets, selectorStatus } from '../../store/ticketsSlice'
import { selectorFilter } from '../../store/filterSlice'

import styles from './ticketList.module.scss'

export default function Ticketlist() {
  const [quantity, setQuantity] = useState(5)
  const tickets = useSelector(selectorTickets)
  const status = useSelector(selectorStatus)
  const filter = useSelector(selectorFilter)
  const { withoutTransfers, oneTransfers, twoTransfers, threeTransfers } = filter

  const filtering = (arr) => {
    let newArr = []
    const countArr = { withoutTransfers: 0, oneTransfers: 1, twoTransfers: 2, threeTransfers: 3 }

    if (filter.all) return arr
    else {
      for (let key in filter) {
        if (filter[key]) {
          const midArr = arr.filter(
            (ticket) =>
              ticket.segments[0].stops.length === countArr[key] || ticket.segments[1].stops.length === countArr[key]
          )
          newArr.push([...midArr])
        }
      }
    }
    console.log([...newArr].flat())
    return [...newArr].flat()
  }

  let elements = filtering(tickets).map((item, id) => {
    if (id < quantity) {
      return <Ticket key={uniqid()} ticket={item} />
    }
  })

  return (
    <>
      <BarLoader className={styles.loader} color="#2196F3" loading={status === 'loading'} />
      <ul className={styles.list}>
        {withoutTransfers || oneTransfers || twoTransfers || threeTransfers ? (
          elements
        ) : (
          <h4>Рейсов, подходящих под заданные фильтры, не найдено!</h4>
        )}
      </ul>
      <button
        className={
          quantity <= tickets.length && (withoutTransfers || oneTransfers || twoTransfers || threeTransfers)
            ? styles.button
            : styles.invisible
        }
        onClick={() => setQuantity(quantity + 5)}
      >
        Показать еще 5 билетов!
      </button>
    </>
  )
}
