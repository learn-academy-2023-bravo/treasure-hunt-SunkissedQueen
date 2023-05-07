import React from "react";

const NewGame = ({reStart, counter}) => {
  return(
    <>
      {counter > 0 ? 
        <p>Plays Left: {counter}</p> :
        <p> Beach day is over! You have ran out of plays.</p>
      }
      
      <button onClick={reStart}>Play Again</button>
    </>
  )
}

export default NewGame