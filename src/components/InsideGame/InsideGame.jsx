import React, { useState } from 'react'
import GameHeader from './GameHeader'
import MainGamePart from './MainGamePart'

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
        else{
          setScore((prev) => prev - 2);
        }

        setSelectedNum(undefined);
      }



  return (
    <div>
      <GameHeader selectedNum={selectedNum} setSelectedNum={setSelectedNum} score={score} error={error} setError={setError}/>
      <MainGamePart currentDice={currentDice} rollDice={rollDice} setScore={setScore}/>
    </div>
  )
}

export default InsideGame
