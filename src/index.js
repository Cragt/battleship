// import _ from "lodash";

function ship(length, timesHit, isSunk) {
  return {
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

  function placeShip(row, col) {
    if (row < 0 || row >= size || col < 0 || col >= size) {
      console.log("Invalid position");
      return;
    }

    board[row][col] = "ship";
  }

  function receiveAttack(row, col) {
    if (board[row][col] === "ship") {
      // const ship = board[row][col].ship;
      board[row][col] = "hit";
    } else if (board[row][col] === "miss") {
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
console.log(gameBoard);
gameBoard.placeShip(1, 1);
gameBoard.receiveAttack(1, 1);
gameBoard.receiveAttack(1, 2);

let ship1 = ship(4, 2, false);
console.log(gameBoard.getCellStatus(1, 1));
console.log(gameBoard.getCellStatus(1, 3));
console.log(ship1);
ship1.hit();
ship1.hit();
console.log(ship1);
