import React from "react"

const Square = ({board, showIndex, emoji, counter}) => {
// console.log(board)
  // will need index passed from App.js
  // const handleClick = () => {
  //   showIndex(index)
  // }

  return (
    <main className="grid">
      {board.map((value, index) => {
        return(
          <div 
            key={index} 
            className="square"
            onClick={()=>{emoji && counter > 0 && showIndex(index)}}
            // onClick={handleClick}
          >
            {value}
          </div>
        )
      })}
    </main>
  )
}
export default Square
