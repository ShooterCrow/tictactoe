// import { useState } from "react"
import circle from "../Components/Assets/O-icon.png"
import cross from "../Components/Assets/X-icon.png"
const Square = ({ square, id, play, setPlay, squares, setSquares, winNotice}) => {
  // const [icon, setIcon] = useState(circle)
  
  const handleClick = (e) => {
    if (!winNotice) {
      const taken = e.target?.classList.contains(play) || 
      e.target.classList.contains("Circle") ||
      e.target.classList.contains("Cross")
      // console.log(taken, play, e.target)
  
      if (!taken) {
        if (play === "Circle") {
          e.target.setAttribute("src", circle)
          e.target.classList.add(play)
          setPlay("Cross")
          handleSquareSwap("circle")
        }
        if (play === "Cross") {
          e.target.setAttribute("src", cross)
          e.target.classList.add(play)
          setPlay("Circle")
          handleSquareSwap("cross")
        }
      }
    }
  }

  const handleSquareSwap = (iconType) => {
    squares.map((x, i) => {
      if (i === id) {
        squares[i] = iconType
        return iconType
      } else {
        return square
      }
    })
    // setSquares(nextSquare)
  }


  return (
    <div
      id={id}
      onClick={handleClick}
      className="square">
      <img alt="" src=""/>
    </div>
  )
}

export default Square