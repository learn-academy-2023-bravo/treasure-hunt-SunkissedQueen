import React from "react"

const Square = ({value, index, showIndex}) => {
  const handleClick = () => {
    showIndex(index)
  }

  return (
    <>
      {/* <div className="square" onClick={()=>{showIndex(index)}}>{value}</div> */}
      <div className="square" onClick={handleClick}>{value}</div>
    </>
  )
}
export default Square
