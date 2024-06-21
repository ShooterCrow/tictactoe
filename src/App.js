import { useState } from 'react';
import Square from './Components/square';
import "./index.css" 

function App() {

  const [squares, setSquares] = useState(Array(9).fill(""))
  const [play, setPlay] = useState("Circle")
  const [winNotice, setWinNotice] = useState("")

  const notice = `${play}'s Turn`

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
          />
        )}
      </div>
      <p>{winNotice || notice}</p>
    </div>
  );
}

export default App;
