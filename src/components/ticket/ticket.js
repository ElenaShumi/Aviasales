import React from 'react'

// import PropTypes from 'prop-types'

import styles from './ticket.module.scss'

export default function Ticket({ ticket }) {
  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <div className={styles.price}>ticket.price</div>
        <img className={styles.logo} src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="airlines" />
      </div>
      <div className={styles.info}>
        <div className={styles.route}>
          <div className={styles.title}>MOW – HKT</div>
          <div className={styles.text}>10:45 – 08:00</div>
        </div>
        <div className={styles.length}>
          <div className={styles.title}>В пути</div>
          <div className={styles.text}>21ч 15м</div>
        </div>
        <div className={styles.stops}>
          <div className={styles.title}>2 пересадки</div>
          <div className={styles.text}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.route}>
          <div className={styles.title}>MOW – HKT</div>
          <div className={styles.text}>10:45 – 08:00</div>
        </div>
        <div className={styles.length}>
          <div className={styles.title}>В пути</div>
          <div className={styles.text}>21ч 15м</div>
        </div>
        <div className={styles.stops}>
          <div className={styles.title}>2 пересадки</div>
          <div className={styles.text}>HKG, JNB</div>
        </div>
      </div>
    </li>
  )
}
