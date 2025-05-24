import React, { useState } from 'react'
import GameHeader from './GameHeader'
import MainGamePart from './MainGamePart'
import styles from './InsideGame.module.css'

const InsideGame = () => {
  const [selectedNum, setSelectedNum] = useState();  
  const [score,setScore] = useState(0);
  const [error,setError] = useState();
  const [currentDice, setCurrentDice] = useState(1);

      const generateRandomNum = (min,max) => {
        console.log(Math.floor(Math.random()*(max-min))+min);
        return Math.floor(Math.random()*(max-min))+min;
      }
      const rollDice = () => {
        if(!selectedNum){
          setError("You have not selected any number");
          return;
        }
        setError("");
        const randomNumber = generateRandomNum(1,7);
        setCurrentDice(randomNumber);
        if(selectedNum === randomNumber ){
          setScore((prev) => prev + randomNumber);
        }
        else if(selectedNum === 3){
          setCurrentDice(selectedNum);
          setScore((prev) => prev+3);
        }
        else{
          setScore((prev) => prev - 2);
        }

        setSelectedNum(undefined);
      }



  return (
    <div className={`${styles.container}`}>
      <GameHeader selectedNum={selectedNum} setSelectedNum={setSelectedNum} score={score} error={error} setError={setError}/>
      <MainGamePart currentDice={currentDice} rollDice={rollDice} setScore={setScore}/>
    </div>
  )
}

export default InsideGame
