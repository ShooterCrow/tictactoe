import { useState } from "react"
import circle from "../Components/Assets/O-icon.png"
import cross from "../Components/Assets/X-icon.png"
const Square = ({ square, id, play, setPlay, squares, setSquares }) => {
  const [icon, setIcon] = useState(circle)
  
  const handleClick = (e) => {
    const taken = e.target.classList.contains(play)
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

  const handleSquareSwap = (iconType) => {
    const nextSquare = squares.map((x, i) => {
      if (i === id) {
        return iconType
      } else {
        return square
      }
    })
    setSquares(nextSquare)
  }


  return (
    <div
      id={id}
      onClick={handleClick}
      className="square">
      <img src=""/>
    </div>
  )
}

export default Square