import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './LandingPage.module.css'
import diceGame from '/diceGame.png'
import InsideGame from '../InsideGame/InsideGame'


const LandingPage = () => {
  const [insideGame, setInsideGame] = useState(false);
  const handleClick = () => {
    setInsideGame((prev) => !prev);
    
  }
  if(insideGame){
    return <InsideGame/>
  }
  return (
    <div className={`${styles.container}`}>
       
          <img src={`${diceGame}`} alt="dice image" />
        
        <div>
            <h1>DICE GAME</h1>
            <Button msg="Play Now" className={`${styles.btn}`} handleClick={handleClick}  />
        </div>

      
    </div>
  )
}

export default LandingPage
