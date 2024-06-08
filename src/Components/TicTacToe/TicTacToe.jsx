import React, { useState } from 'react'
import './TicTacToe.css'
import circle from '../Assets/O-icon.png'
import cross from '../Assets/X-icon.png'


const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  let createBoxes = () => {
    for (let i = 0; i < 3; i++) {
      let box = document.createElement("div");
      console.log(box)
      alert(box)
    }
  }

  createBoxes()
  // console.log(box)

  function tojjle(e, num) {
    if (lock) {
      return 0
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`
      data[num] = 'x';
    } else {
      e.target.innerHTML = `<img src='${circle}'>`
      data[num] = 'o';
    }
    setCount(count + 1);
    console.log(e.target, data, num)

  }
  return (
    <div className='container'>
      <h1 className="title">Tic Tac <span> Toe</span></h1>
      <div className="board">
        <div className="row1">
          <div onClick={(e) => { tojjle(e, 0) }} className="boxes"></div>
          <div onClick={(e) => { tojjle(e, 1) }} className="boxes"></div>
          <div onClick={(e) => { tojjle(e, 2) }} className="boxes"></div>
        </div>
        <div className="row2">
          <div onClick={(e) => { tojjle(e, 3) }} className="boxes"></div>
          <div onClick={(e) => { tojjle(e, 4) }} className="boxes"></div>
          <div onClick={(e) => { tojjle(e, 5) }} className="boxes"></div>
        </div>
        <div className="row3">
          <div onClick={(e) => { tojjle(e, 6) }} className="boxes"></div>
          <div onClick={(e) => { tojjle(e, 7) }} className="boxes"></div>
          <div onClick={(e) => { tojjle(e, 8) }} className="boxes"></div>
        </div>

      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe