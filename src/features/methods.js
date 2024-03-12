let methods = {
  cellEmpty: (cellId) => {
    const cell = document.getElementById(cellId);
    //cell is empty
    if (cell.innerHTML.trim() === "") {
      return true;
    }
    // cell has value
    return false;
  },
  placeMark: (cellId, playerIcon, setMarkCount) => {
    const cell = document.getElementById(cellId);
    cell.innerHTML = playerIcon;
    setMarkCount((prev) => prev + 1);
  },
  checkGameOver: (
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
  ) => {
    const cell = document.getElementsByClassName("cell");
    const slashmark = document.getElementById("slashmark");

    //------------------------check row----------------------
    //first row
    if (
      cell[0].innerHTML == cell[1].innerHTML &&
      cell[1].innerHTML == cell[2].innerHTML &&
      cell[0].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[0].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = "translate(0px,35px) rotate(90deg)";
    }
    //second row
    else if (
      cell[3].innerHTML == cell[4].innerHTML &&
      cell[4].innerHTML == cell[5].innerHTML &&
      cell[3].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[3].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = " translate(0px,115px) rotate(90deg)";
    }
    //third row
    else if (
      cell[6].innerHTML == cell[7].innerHTML &&
      cell[7].innerHTML == cell[8].innerHTML &&
      cell[6].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[6].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = " translate(0px,195px) rotate(90deg)";
    }
    //---------------------------------check column----------------
    //first column
    if (
      cell[0].innerHTML == cell[3].innerHTML &&
      cell[3].innerHTML == cell[6].innerHTML &&
      cell[0].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[0].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = "translate(-80px,110px)";
    }
    //second column
    else if (
      cell[1].innerHTML == cell[4].innerHTML &&
      cell[4].innerHTML == cell[7].innerHTML &&
      cell[1].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[1].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = "translate(0px,110px)";
    }
    //third column
    else if (
      cell[2].innerHTML == cell[5].innerHTML &&
      cell[5].innerHTML == cell[8].innerHTML &&
      cell[2].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[2].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = "translate(80px,110px)";
    }
    //----------------------check diagonal----------------
    //first diagonal
    if (
      cell[0].innerHTML == cell[4].innerHTML &&
      cell[4].innerHTML == cell[8].innerHTML &&
      cell[0].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[0].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = "translate(0px,115px) rotate(-45deg) ";
    }
    //second
    else if (
      cell[2].innerHTML == cell[4].innerHTML &&
      cell[4].innerHTML == cell[6].innerHTML &&
      cell[2].innerHTML.trim() !== ""
    ) {
      setWinnerFound(true);
      checkAndSetWinner(
        cell[2].innerHTML,
        setWinner,
        crossMark,
        circleMark,
        setGameOver,
        setXScore,
        setOScore
      );
      slashmark.style.opacity = "1";
      slashmark.style.transform = "translate(0px,115px) rotate(45deg) ";
    }
    //---------------------------checkTie--------------
    else if (markCount == 8 && !winnerFound) {
      setTie(true);
    }
  },
  resetCells: () => {
    const slashmark = document.getElementById("slashmark");
    slashmark.style.opacity = "0";
    const cell = document.querySelectorAll(".cell");
    cell.forEach((el) => {
      el.innerHTML = null;
    });
  },
};

//extra functions for above methods
export const checkAndSetWinner = (
  stringContent,
  setWinner,
  crossMark,
  circleMark,
  setGameOver,
  setXScore,
  setOScore
) => {
  if (stringContent == crossMark) {
    setXScore((prev) => prev + 1);
    setWinner("X");
  } else if (stringContent == circleMark) {
    setOScore((prev) => prev + 1);
    setWinner("O");
  }
  setGameOver(true);
};
export const { cellEmpty, placeMark, checkGameOver, resetCells } = methods;
