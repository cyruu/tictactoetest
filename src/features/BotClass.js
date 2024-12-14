export class BotClass {
  getRandomCellId = () => {
    const cells = document.getElementsByClassName("cell");
    const emptyCells = Array.from(cells).filter(
      (cell) => cell.innerHTML.trim() === ""
    );
    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    return randomCell.id;
  };
}
