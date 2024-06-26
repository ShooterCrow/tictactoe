import { useState, useEffect } from 'react';
import Square from './Components/square';
import "./index.css" 

function App() {

  const [squares, setSquares] = useState(Array(9).fill(""))
  const [play, setPlay] = useState("Circle")
  const [winNotice, setWinNotice] = useState("")

  const notice = `${play}'s Turn`
  
  const clearBoard = () => {

  }

  const win = (icon) => {
    const winComb = [
      // Row
      [0,1,2],
      [3,4,5],
      [6,7,8],
      // Column
      [0,3,6],
      [1,4,7],
      [2,5,8],
      // X
      [0,4,8],
      [2,4,6]
    ]

    winComb.forEach(x => {
      // let winAlert = x.every(y => squares[y] === icon)
      // console.log(winAlert)
      // if (winAlert) {
      //   setWinNotice(icon + " Wins" )
      //   alert()
      //   return
      // } 
      // if (!winAlert) {
      //   setWinNotice("")
      // }
      // ANOTJER WAY, BUT LONJER
      const [a,b,c] = x
      console.log(squares[a],squares[b],squares[c])
      if (squares[a] === icon && squares[b] === icon && squares[c] === icon) {
        setInterval(clearBoard, 500);
        setWinNotice(icon+" wins");
        console.log(212)
      } else {
        console.log(squares)
      }
    })
      
  }

  useEffect(() => {
    win(play)
  }, [play,squares])

  return (
    <div className='app'>
      <div className='board'>
        {squares.map((square, index) =>
          <Square 
            key={index}
            id={index}
            square={square}
            play={play}
            setPlay={setPlay}
            squares={squares}
            setSquares={setSquares}
            win={win}
            winNotice={winNotice}
          />
        )}
      </div>
      <p>{winNotice || notice}</p>
    </div>
  );
}

export default App;
