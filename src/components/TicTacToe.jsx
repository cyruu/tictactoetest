import React, { useEffect, useState } from "react";
import { BotClass } from "../features/BotClass";
import {
  cellEmpty,
  placeMark,
  checkGameOver,
  resetCells,
} from "../features/methods";
const bot = new BotClass();
function TicTacToe() {
  let crossMark = '<i class="ri-close-large-line"></i>';
  let circleMark = '<i class="ri-circle-line"></i>';
  const [playABot, setplayABot] = useState(true);
  const [xscore, setXScore] = useState(0);
  const [oscore, setOScore] = useState(0);
  const [botScore, setbotScore] = useState(0);
  const [playerScore, setplayerScore] = useState(0);
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
    if (!playABot) {
      currentPlayer == "X"
        ? setPlayerIcon(crossMark)
        : setPlayerIcon(circleMark);
    } else {
      setPlayerIcon(crossMark);
    }
  }, [currentPlayer, playABot]);
  async function handleClick({ target }) {
    if (gameOver) return;
    let cellId = target.id;
    let tempGameOver = false;
    // if this cell is empty
    if (cellEmpty(cellId)) {
      // place mark
      placeMark(cellId, playerIcon, setMarkCount);
      // check game over
      tempGameOver = checkGameOver(
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

      if (playABot && !tempGameOver) {
        await new Promise((res, rej) => {
          setTimeout(() => {
            res("ok bot");
          }, 150);
        });
        let randomId = bot.getRandomCellId();
        placeMark(randomId, circleMark, setMarkCount);
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
      } else {
        setCurrentPlayer((prev) => (prev == "X" ? "O" : "X"));
      }
    }
  }

  return (
    <div className="main">
      {playABot ? (
        <p className="player">You are X</p>
      ) : (
        <h1 className="player">{currentPlayer}'s turn</h1>
      )}
      <div className="scorecard  ">
        {!playABot ? (
          <>
            <p>
              X's Score:{" "}
              <span className="score px-2 py-1 bg-gray-700 rounded-md mr-5">
                {xscore}
              </span>
            </p>
            <p>
              O's Score:{" "}
              <span className="score px-2 py-1 bg-gray-700 rounded-md">
                {oscore}
              </span>
            </p>
          </>
        ) : (
          <>
            <p>
              Player's Score:{" "}
              <span className="score px-2 py-1 bg-gray-700 rounded-md mr-5">
                {xscore}
              </span>
            </p>
            <p>
              Bot's Score:{" "}
              <span className="score px-2 py-1 bg-gray-700 rounded-md">
                {oscore}
              </span>
            </p>
          </>
        )}
      </div>
      <div id="slashmark"></div>
      <div className="tictac mt-4" onClick={handleClick}>
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
      <div className="options flex mt-14">
        <button
          className={`mr-3 border border-gray-500 px-5 py-1 text-lg rounded-md ${
            playABot ? "bg-gray-700 text-white" : "text-black"
          }`}
          onClick={() => {
            setplayABot(true);
            handlePlayAgain();
            setXScore(0);
            setOScore(0);
          }}
        >
          vs bot
        </button>
        <button
          className={`ml-3 border border-gray-500 px-5 py-1 text-lg rounded-md  ${
            !playABot ? "bg-gray-700 text-white" : "text-black"
          }`}
          onClick={() => {
            setplayABot(false);
            handlePlayAgain();
            setXScore(0);
            setOScore(0);
          }}
        >
          2 player
        </button>
      </div>
      {gameOver ? (
        <div className="result pb-24">
          <p className="">{winner + " wins!"}</p>
          <button className="btn" onClick={handlePlayAgain}>
            Play again
          </button>
        </div>
      ) : (
        ""
      )}
      {tie && !winnerFound ? (
        <div className="result pb-24">
          <p className="">{"Tie!"}</p>
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
