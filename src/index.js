// import _ from "lodash";

function ship(type, length, timesHit, isSunk) {
  return {
    type: type,
    length: length,
    timesHit: timesHit,
    isSunk: isSunk,
    hit() {
      this.timesHit++;
      this.sunk();
    },
    sunk() {
      if (this.timesHit === this.length) {
        this.isSunk = true;
      }
    },
  };
}

function createGameBoard() {
  const size = 10;
  const board = [];

  for (let row = 0; row < size; row++) {
    const rowArray = [];
    for (let col = 0; col < size; col++) {
      rowArray.push("empty");
    }
    board.push(rowArray);
  }

  function placeShip(row, col, ship) {
    space = 0;
    if (row < 0 || row >= size || col < 0 || col >= size) {
      console.log("Invalid position");
      return;
    }
    // Trying to search the whole length of placeable ship to ensure gameboard spaces are empty and ship is placeable
    // for (let i = space; i < ship.length; i++) {
    //   console.log(board[row][col]);
    // }
    while (space != ship.length) {
      board[row][col] = ship.type;
      row++;
      space++;
    }
    console.log(board);
  }
  const shipTypes = [
    "destroyer",
    "submarine",
    "cruiser",
    "battleship",
    "carrier",
  ];

  function receiveAttack(row, col, ship) {
    if (shipTypes.includes(board[row][col])) {
      board[row][col] = "hit";
      ship.hit();
    } else if (board[row][col] === "miss" || board[row][col] === "hit") {
      console.log("Invalid position");
      return;
    } else {
      board[row][col] = "miss";
    }
  }

  function getCellStatus(row, col) {
    return board[row][col];
  }

  return {
    placeShip,
    receiveAttack,
    getCellStatus,
  };
}

const gameBoard = createGameBoard();
let destroyer = ship("destroyer", 2, 0, false);
let submarine = ship("submarine", 3, 0, false);
let cruiser = ship("cruiser", 3, 0, false);
let battleship = ship("battleship", 4, 0, false);
let carrier = ship("carrier", 5, 0, false);
gameBoard.placeShip(1, 1, destroyer);
gameBoard.receiveAttack(1, 1, destroyer);
console.log(destroyer);
gameBoard.receiveAttack(2, 1, destroyer);
console.log(destroyer);
gameBoard.placeShip(4, 1, carrier);
console.log(gameBoard.getCellStatus(1, 1));
