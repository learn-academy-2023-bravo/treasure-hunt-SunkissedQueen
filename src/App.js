import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import NewGame from "./components/NewGame"

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

  const [counter, setCounter] = useState(5)

  const [emoji, setEmoji] = useState(true)

  const showIndex = (selectedId) => {
    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)

    console.log(treasureLocation, bombLocation)
    if(treasureLocation === selectedId) {
      setEmoji(false)
      board[selectedId] = "☀️"
      alert("You found the treasure. Enjoy your beach day")
      setBoard([...board])
    } else if(bombLocation === selectedId) {
      setEmoji(false)
      board[selectedId] = "⛈"
      alert("Sorry, your beach umbrella 🌂 is being used for rain ☔️.")
      setBoard([...board])
    } else {
      board[selectedId] = "🌴"
      setCounter(counter - 1)
      setBoard([...board])
    }
  }

  const reStart = () => {
    setBoard(Array(9).fill("?"))
    setCounter(5)
    setEmoji(true)
  }
  

  // console.table(board)
  // console.log(counter)
  return (
    <div className="font-effect-emboss">
      <h1 >Treasure Hunt Game</h1>
      <Square 
        board={board}
        showIndex={showIndex}
        emoji={emoji} 
        counter={counter}
      />
      <NewGame 
        reStart={reStart}
        counter={counter}
      />
      
    </div>
  )
}

export default App
