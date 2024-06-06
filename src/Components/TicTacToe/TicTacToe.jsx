import React from 'react'
import './TicTacToe.css'
import circle from '../Assets/O-icon.png'
import cross from'../Assets/X-icon.png'

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className="title">Tic Tac <span> Toe</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>

      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe