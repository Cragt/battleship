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

eval("// import _ from \"lodash\";\n\nfunction ship(length, timesHit, isSunk) {\n  return {\n    length: length,\n    timesHit: timesHit,\n    isSunk: isSunk,\n    hit() {\n      this.timesHit++;\n      this.sunk();\n    },\n    sunk() {\n      if (this.timesHit === this.length) {\n        this.isSunk = true;\n      }\n    },\n  };\n}\n\nfunction createGameBoard() {\n  const size = 10;\n  const board = [];\n\n  for (let row = 0; row < size; row++) {\n    const rowArray = [];\n    for (let col = 0; col < size; col++) {\n      rowArray.push(\"empty\");\n    }\n    board.push(rowArray);\n  }\n\n  function placeShip(row, col) {\n    if (row < 0 || row >= size || col < 0 || col >= size) {\n      console.log(\"Invalid position\");\n      return;\n    }\n\n    board[row][col] = \"ship\";\n  }\n\n  function receiveAttack(row, col) {\n    if (board[row][col] === \"ship\") {\n      board[row][col] = \"hit\";\n    } else if (board[row][col] === \"miss\") {\n      console.log(\"Invalid position\");\n      return;\n    } else {\n      board[row][col] = \"miss\";\n    }\n  }\n\n  function getCellStatus(row, col) {\n    return board[row][col];\n  }\n  return {\n    placeShip,\n    receiveAttack,\n    getCellStatus,\n  };\n}\n\nconst gameBoard = createGameBoard();\nconsole.log(gameBoard);\ngameBoard.placeShip(1, 1);\ngameBoard.receiveAttack(1, 1);\ngameBoard.receiveAttack(1, 2);\n\nlet ship1 = ship(4, 2, false);\nconsole.log(gameBoard.getCellStatus(1, 1));\nconsole.log(gameBoard.getCellStatus(1, 3));\nconsole.log(ship1);\nship1.hit();\nship1.hit();\nconsole.log(ship1);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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