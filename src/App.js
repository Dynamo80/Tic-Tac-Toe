import React from "react";
import Board from './Board'
import { useState } from "react";
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState(null)

  const handleClick = (i) => {
    if (squares[i] || winner) return null;
  
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
    checkWinner(newSquares)
  };

    const checkWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    
    for(let i=0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a])
      }
    }
    }
    const restart = () => {
      setWinner(null);
      setXIsNext(true);
      setSquares(Array(9).fill(null));
    }
    return (
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <Board value={squares} onClick={handleClick} />
        {winner ? (
          <p>{winner} Wins!</p>
        ): (<p>Next Player {xIsNext ? "X" : "O"}</p>) }
        <button onClick={restart} id="restart">Restart</button>
      </div>
    )
  }

export default App