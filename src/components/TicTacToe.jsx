import React, { useEffect, useState } from "react";
import {
  cellEmpty,
  placeMark,
  checkGameOver,
  resetCells,
} from "../features/methods";
function TicTacToe() {
  let crossMark = '<i class="ri-close-large-line"></i>';
  let circleMark = '<i class="ri-circle-line"></i>';
  const [xscore, setXScore] = useState(0);
  const [oscore, setOScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playerIcon, setPlayerIcon] = useState(crossMark);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);
  const [markCount, setMarkCount] = useState(0);
  const [winnerFound, setWinnerFound] = useState(false);

  function handlePlayAgain() {
    resetCells();
    setGameOver(false);
    setTie(false);
    setMarkCount(0);
    setGameOver(false);
    setWinnerFound(false);
  }
  useEffect(() => {
    currentPlayer == "X" ? setPlayerIcon(crossMark) : setPlayerIcon(circleMark);
  }, [currentPlayer]);
  function handleClick({ target }) {
    let cellId = target.id;
    // if this cell is empty
    if (cellEmpty(cellId)) {
      // place mark
      placeMark(cellId, playerIcon, setMarkCount);
      // check game over
      checkGameOver(
        setGameOver,
        setWinner,
        crossMark,
        circleMark,
        setTie,
        markCount,
        winner,
        setXScore,
        setOScore,
        winnerFound,
        setWinnerFound
      );

      setCurrentPlayer((prev) => (prev == "X" ? "O" : "X"));
    }
  }

  return (
    <div className="main">
      <h1 className="player">{currentPlayer}'s turn</h1>
      <div className="scorecard">
        <p>
          X's Score: <span className="score">{xscore}</span>
        </p>
        <p>
          O's Score: <span className="score">{oscore}</span>
        </p>
      </div>
      <div id="slashmark"></div>
      <div className="tictac" onClick={handleClick}>
        <div id="0" className="cell"></div>
        <div id="1" className="cell"></div>
        <div id="2" className="cell"></div>
        <div id="3" className="cell"></div>
        <div id="4" className="cell"></div>
        <div id="5" className="cell"></div>
        <div id="6" className="cell"></div>
        <div id="7" className="cell"></div>
        <div id="8" className="cell"></div>
      </div>
      {gameOver ? (
        <div className="result">
          <p>{winner + " wins!"}</p>
          <button className="btn" onClick={handlePlayAgain}>
            Play again
          </button>
        </div>
      ) : (
        ""
      )}
      {tie ? (
        <div className="result">
          <p>{"Tie!"}</p>
          <button className="btn" onClick={handlePlayAgain}>
            Play again
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TicTacToe;
