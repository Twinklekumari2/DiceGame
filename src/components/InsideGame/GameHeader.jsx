import React, { useState } from 'react'
import styles from './GameHeader.module.css'
import styled from "styled-components";

const GameHeader = ({selectedNum,setSelectedNum,score,error,setError}) => {
    const arr = [1,2,3,4,5,6];
    const handleSelectedNumber = (value) => {
      setSelectedNum(value);
      setError(" ");
    }


  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.left}`}>
        <span>{score}</span>
        <p>Total Score</p>
      </div>
      <div className={`${styles.right}`}>
        <p className={`${styles.error}`}>{error}</p>
        <div className={`${styles.right_upper}`}>
        {arr.map((value,i) => (
            <Box isSelected={value === selectedNum} key={i} onClick={() => handleSelectedNumber(value)}>{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
        
      </div>
    </div>
  )
}

export default GameHeader

const Box = styled.div`
        background-color: ${(props) => (props.isSelected ? "black" : "white")};
        color: ${(props) => (!props.isSelected ? "black" : "white")};
`
