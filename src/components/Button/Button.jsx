import React from 'react'
import styles from './Button.module.css';

const Button = ({msg,handleClick,isOutline}) => {
    
  return (
    <button className={isOutline ? styles.btn_outline : styles.btn} onClick={handleClick}  >
        {msg}
    </button>
  )
}

export default Button
