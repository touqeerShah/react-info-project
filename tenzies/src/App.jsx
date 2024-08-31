import Dice from './components/Dice'
import { useEffect, useState } from "react"
import Confetti from 'react-confetti';

import './App.css'

function App() {
  const randomIntegerInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [randomDiceNumber, setRandomDiceNumber] = useState(allNewDice())
  const [holdDice, setHoldDice] = useState(0)
  const [hasWon, setHasWon] = useState(false);

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  useEffect(() => {

    const checkWinningCondtion = async () => {
      const isfinished = randomDiceNumber.every((dice) => dice.isHeld == false)
      if (isfinished) {
        setHasWon(true);
        await sleep(10000); // Wait for 2 seconds

        setHasWon(false)
        setRandomDiceNumber(allNewDice())
      }
    }
    checkWinningCondtion()

  }, [randomDiceNumber])


  function allNewDice() {
    const diceNumbers = Array.from({ length: 10 }, () => { return { "value": randomIntegerInRange(1, 6), isHeld: false } });
    return diceNumbers
  }

  const rollDise = () => {
    setRandomDiceNumber((prevDice) =>
      prevDice.map((oldDice) => {
        if (!oldDice.isHeld) {
          return { ...oldDice, value: randomIntegerInRange(1, 6) };
        } else {
          return oldDice
        }
      })
    )
  }
  const toggleHold = (index) => {
    setRandomDiceNumber((prevDice) =>
      prevDice.map((oldDice, i) => {

        if (i === index) {
          if (holdDice == 0) {
            setHoldDice(oldDice.value)
          } else if (holdDice != oldDice.value) {
            return oldDice;
          }
          return { ...oldDice, isHeld: true };
        } else {
          return oldDice;
        }
      })
    );
  };

  return (
    <div className="fullscreen-rounded-box">
      {hasWon && <Confetti />}

      <h1>Tenzies</h1>
      <div className="dice-container">

        {randomDiceNumber.map((number, index) => {
          // console.log(number)
          return <Dice
            key={index}
            number={number.value}
            isHeld={number.isHeld}
            onHoldToggle={() => toggleHold(index)}
          />
        })}

      </div>
      <button className='roll-btn' onClick={() => { rollDise() }}>{hasWon ? "You Win!" : "Roll"}</button>
      {hasWon && <div className="win-message">Congratulations! You won the game!</div>}

    </div>
  )
}

export default App
