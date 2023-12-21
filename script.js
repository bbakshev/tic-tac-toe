//create a variable to store the game status
const playerX = 'X';
const playerO = 'O';
const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left col
  [1, 4, 7], // middle col
  [2, 5, 8], // right col
  [0, 4, 8], // left diagonal
  [2, 4, 6] // right diagonal
];

