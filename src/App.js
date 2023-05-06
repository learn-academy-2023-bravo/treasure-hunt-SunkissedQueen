import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const showIndex = (selectedId) => {
    let treasureLocation = Math.ceil(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)
    console.log(treasureLocation, bombLocation)
    if(treasureLocation === selectedId) {
      board[selectedId] = "🧀"
      setBoard([...board])
    } else if(bombLocation === selectedId) {
      board[selectedId] = "🍅"
      setBoard([...board])
    } else {
      board[selectedId] = "🍪"
      setBoard([...board])
    }
  }

  const reStart = () => {
    setBoard(["?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="grid">
        {board.map((value, index) => {
          return(
            <Square 
              key={index} 
              value={value} 
              index={index}
              showIndex={showIndex}
            />
          )
        })}
      </div>
      <br />
      <button onClick={reStart}>Play Again</button>
    </>
  )
}

export default App
