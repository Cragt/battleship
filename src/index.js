// import _ from "lodash";
let gameArea = document.getElementById("game-area");
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

  function player1Board() {
    const cellWidth = 64;
    const cellHeight = 64;

    const cells = document.createElement("canvas");
    cells.width = board[0].length * cellWidth;
    cells.height = board.length * cellHeight;
    document.body.appendChild(cells);
    const context = cells.getContext("2d");

    for (let i = 0; i < board.length; i++) {
      for (let a = 0; a < board[0].length; a++) {
        if (i % 2 == 0) {
          if (a % 2 == 0) {
            context.fillStyle = "#aaaaaa";
          } else {
            context.fillStyle = "#888888";
          }
        } else {
          if (a % 2 == 1) {
            context.fillStyle = "#aaaaaa";
          } else {
            context.fillStyle = "#888888";
          }
        }
        context.fillRect(a * cellWidth, i * cellHeight, cellWidth, cellHeight);
        switch (board[i][a]) {
          case "W":
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.arc(
              a * cellWidth + cellHeight / 2,
              i * cellHeight + cellHeight / 2,
              10,
              0,
              Math.PI * 2,
              true
            );
            context.closePath();
            context.fill();
            break;
          case "B":
            context.fillStyle = "#000000";
            context.beginPath();
            context.arc(
              (a * cellWidth) / 2,
              i * cellHeight + cellHeight / 2,
              10,
              0,
              Math.PI * 2,
              true
            );
            context.closePath();
            context.fill();
            break;
        }
      }
    }
  }

  function player2Board() {
    const cellWidth = 64;
    const cellHeight = 64;

    const cells = document.createElement("canvas");
    cells.width = board[0].length * cellWidth;
    cells.height = board.length * cellHeight;
    document.body.appendChild(cells);
    const context = cells.getContext("2d");

    for (let i = 0; i < board.length; i++) {
      for (let a = 0; a < board[0].length; a++) {
        if (i % 2 == 0) {
          if (a % 2 == 0) {
            context.fillStyle = "#aaaaaa";
          } else {
            context.fillStyle = "#888888";
          }
        } else {
          if (a % 2 == 1) {
            context.fillStyle = "#aaaaaa";
          } else {
            context.fillStyle = "#888888";
          }
        }
        context.fillRect(a * cellWidth, i * cellHeight, cellWidth, cellHeight);
        switch (board[i][a]) {
          case "W":
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.arc(
              a * cellWidth + cellHeight / 2,
              i * cellHeight + cellHeight / 2,
              10,
              0,
              Math.PI * 2,
              true
            );
            context.closePath();
            context.fill();
            break;
          case "B":
            context.fillStyle = "#000000";
            context.beginPath();
            context.arc(
              (a * cellWidth) / 2,
              i * cellHeight + cellHeight / 2,
              10,
              0,
              Math.PI * 2,
              true
            );
            context.closePath();
            context.fill();
            break;
        }
      }
    }
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
    player1Board,
    player2Board,
    placeShip,
    receiveAttack,
    getCellStatus,
  };
}

function player(name, turn, isComputer) {
  return {
    name: name,
    turn: turn,
    isComputer: isComputer,
  };
}
const gameBoard = createGameBoard();

function gameLoop() {
  let newGameBtn = document.createElement("button");
  newGameBtn.innerText = "New Game";

  gameArea.appendChild(newGameBtn);
  newGameBtn.addEventListener("click", (event) => {
    newGameBtn.style.display = 'none';
    let player1Name = prompt("Enter name for player 1");
    let player2Name = prompt("Enter name for player 2");
    gameBoard.player1Board();
    gameBoard.player2Board();
  })
}
gameLoop();
let player1 = player("Craig", 0, 0);
// console.log(player1);
let destroyer = ship("destroyer", 2, 0, false);
let submarine = ship("submarine", 3, 0, false);
let cruiser = ship("cruiser", 3, 0, false);
let battleship = ship("battleship", 4, 0, false);
let carrier = ship("carrier", 5, 0, false);
gameBoard.placeShip(1, 1, destroyer);
// gameBoard.player1Board();
gameBoard.receiveAttack(1, 1, destroyer);
console.log(destroyer);
gameBoard.receiveAttack(2, 1, destroyer);
console.log(destroyer);
gameBoard.placeShip(4, 1, carrier);
console.log(gameBoard.getCellStatus(1, 1));
