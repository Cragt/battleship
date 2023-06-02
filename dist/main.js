/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import _ from \"lodash\";\nlet gameArea = document.getElementById(\"game-area\");\nfunction ship(type, length, timesHit, isSunk) {\n  return {\n    type: type,\n    length: length,\n    timesHit: timesHit,\n    isSunk: isSunk,\n    hit() {\n      this.timesHit++;\n      this.sunk();\n    },\n    sunk() {\n      if (this.timesHit === this.length) {\n        this.isSunk = true;\n      }\n    },\n  };\n}\n\nfunction createGameBoard() {\n  const size = 10;\n  const board = [];\n  for (let row = 0; row < size; row++) {\n    const rowArray = [];\n    for (let col = 0; col < size; col++) {\n      rowArray.push(\"empty\");\n    }\n    board.push(rowArray);\n  }\n\n  function player1Board() {\n\n  \n    const cellWidth = 64;\n    const cellHeight = 64;\n  \n    const cells = document.createElement(\"canvas\");\n    cells.width = board[0].length * cellWidth;\n    cells.height = board.length * cellHeight;\n    document.body.appendChild(cells);\n    const context = cells.getContext(\"2d\");\n  \n    for (let i = 0; i < board.length; i++) {\n      for (let a = 0; a < board[0].length; a++) {\n        if (i % 2 == 0) {\n          if (a % 2 == 0) {\n            context.fillStyle = \"#aaaaaa\";\n          } else {\n            context.fillStyle = \"#888888\";\n          }\n        } else {\n          if (a % 2 == 1) {\n            context.fillStyle = \"#aaaaaa\";\n          } else {\n            context.fillStyle = \"#888888\";\n          }\n        }\n        context.fillRect(a * cellWidth, i * cellHeight, cellWidth, cellHeight);\n        switch (board[i][a]) {\n          case \"W\":\n            context.fillStyle = \"#ffffff\";\n            context.beginPath();\n            context.arc(\n              a * cellWidth + cellHeight / 2,\n              i * cellHeight + cellHeight / 2,\n              10,\n              0,\n              Math.PI * 2,\n              true\n            );\n            context.closePath();\n            context.fill();\n            break;\n          case \"B\":\n            context.fillStyle = \"#000000\";\n            context.beginPath();\n            context.arc(\n              (a * cellWidth) / 2,\n              i * cellHeight + cellHeight / 2,\n              10,\n              0,\n              Math.PI * 2,\n              true\n            );\n            context.closePath();\n            context.fill();\n            break;\n        }\n      }\n    }\n  }\n\n  function placeShip(row, col, ship) {\n    space = 0;\n    if (row < 0 || row >= size || col < 0 || col >= size) {\n      console.log(\"Invalid position\");\n      return;\n    }\n    // Trying to search the whole length of placeable ship to ensure gameboard spaces are empty and ship is placeable\n    // for (let i = space; i < ship.length; i++) {\n    //   console.log(board[row][col]);\n    // }\n    while (space != ship.length) {\n      board[row][col] = ship.type;\n      row++;\n      space++;\n    }\n    console.log(board);\n  }\n  const shipTypes = [\n    \"destroyer\",\n    \"submarine\",\n    \"cruiser\",\n    \"battleship\",\n    \"carrier\",\n  ];\n\n  function receiveAttack(row, col, ship) {\n    if (shipTypes.includes(board[row][col])) {\n      board[row][col] = \"hit\";\n      ship.hit();\n    } else if (board[row][col] === \"miss\" || board[row][col] === \"hit\") {\n      console.log(\"Invalid position\");\n      return;\n    } else {\n      board[row][col] = \"miss\";\n    }\n  }\n\n  function getCellStatus(row, col) {\n    return board[row][col];\n  }\n\n  return {\n    player1Board,\n    placeShip,\n    receiveAttack,\n    getCellStatus,\n  };\n}\n\nfunction player(name, turn, isComputer) {\n  return {\n    name: name,\n    turn: turn,\n    isComputer: isComputer,\n  };\n}\n\nfunction gameLoop() {\n  let newGameBtn = document.createElement(\"button\");\n  newGameBtn.innerText = \"New Game\";\n  gameArea.appendChild(newGameBtn);\n}\n// gameLoop();\nlet player1 = player(\"Craig\", 0, 0);\n// console.log(player1);\nconst gameBoard = createGameBoard();\nlet destroyer = ship(\"destroyer\", 2, 0, false);\nlet submarine = ship(\"submarine\", 3, 0, false);\nlet cruiser = ship(\"cruiser\", 3, 0, false);\nlet battleship = ship(\"battleship\", 4, 0, false);\nlet carrier = ship(\"carrier\", 5, 0, false);\ngameBoard.placeShip(1, 1, destroyer);\ngameBoard.player1Board();\ngameBoard.receiveAttack(1, 1, destroyer);\nconsole.log(destroyer);\ngameBoard.receiveAttack(2, 1, destroyer);\nconsole.log(destroyer);\ngameBoard.placeShip(4, 1, carrier);\nconsole.log(gameBoard.getCellStatus(1, 1));\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;