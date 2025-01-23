import React from 'react'
import styles from './Rules.module.css'

const Rules = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>How to play dice game</h2>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on dice id selecter number is equal to dice number you will get same point as dice</li>
        <li>if you get wrong guess then 2 point will be deducted</li>
      </ul>
    </div>
  )
}

export default Rules
