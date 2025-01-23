import React, { useState } from 'react'
import styles from './MainGamePart.module.css'
import dice1 from '/public/dice_1.svg'
import Button from '../Button/Button'
import Rules from './Rules'
import { use } from 'react'


const MainGamePart = ({currentDice,rollDice,setScore}) => {
  const [showRules,setShowRules] = useState(false);


  const handleClick= () => {
    setScore(0);
  }
  const handleClick2 = () => {
    setShowRules((prev) => !prev);
  }
    

  return (
    <div className={`${styles.container}`}>
      <img src={`/dice_${currentDice}.svg`} onClick={rollDice} alt={`${currentDice}`} />
      <p>Click on Dice to roll</p>
      <Button msg='Reset score' isOutline='true' handleClick={handleClick}/>
      <Button msg={setShowRules ? "Hide Rules" : "Show Rules"} handleClick={handleClick2} />
      <div>
        {showRules && <Rules/>}
      </div>
    </div>

  )
}
export default MainGamePart
