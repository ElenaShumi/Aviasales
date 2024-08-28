import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import PropTypes from 'prop-types'

import { toggleFilter, selectorFilter } from '../../store/filterSlice'

import styles from './ticketFilter.module.scss'

export default function TicketFilter() {
  const name = ['all', 'withoutTransfers', 'oneTransfers', 'twoTransfers', 'threeTransfers']
  const text = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  const dispatch = useDispatch()
  const filter = useSelector(selectorFilter)
  const { all, withoutTransfers, oneTransfers, twoTransfers, threeTransfers } = filter

  const filtering = (item) => {
    if (item === 'all') {
      for (let i = 0; i < name.length; i++) {
        dispatch(toggleFilter(name[i]))
      }
    }

    return dispatch(toggleFilter(item))
  }

  useEffect(() => {
    if (withoutTransfers && oneTransfers && twoTransfers && threeTransfers) {
      dispatch(toggleFilter(name[0]))
    } else if ((!withoutTransfers || !oneTransfers || !twoTransfers || !threeTransfers) && all) {
      dispatch(toggleFilter(name[0]))
    }
  }, [withoutTransfers, oneTransfers, twoTransfers, threeTransfers])

  const elements = name.map((item, index) => {
    return (
      <li key={index} className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name={item}
          id={item}
          checked={filter[item]}
          onChange={() => filtering(item)}
        />
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
