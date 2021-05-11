const generateBoard = function(firstQueen, secondQueen) {
  let board = [];
  const rows = 8;
  const columns = 8;
  for (let x = 0; x < rows; x++) {
    board[x] = [];
    for (let y = 0; y < columns; y++) {
      if (firstQueen[0] == x && firstQueen[1] == y) {
        board[x].push(1);
      } else if (secondQueen[0] == x && secondQueen[1] == y) {
        board[x].push(1);
      } else {
        board[x].push(0);
      }
    }
  }
  return board;
}
const queenThreat = function(board) {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[x][y] == 1) {  
        for (let i = 0; i < 8; i++) {   // checking for horizontal match
          if (board[x][i] == 1 && y !== i) {
            return true;
          }
        }
        for (let i = 0; i < 8; i++) {        // checking for vertical match
          if (board[i][y] == 1 && x !== i) {
            return true;
          }
        }
        for (let i = x, j = y; i < 8 && j < 8; i++, j++) {   // checking diagonal direction 1
          if (board[i][j] == 1 && (x !== i && y !== j)) {
            return true;
          }
        }
        for (let i = x, j = y; i < 8 && j > 0; i++, j--) {  // checking diagonal direction 2
          if (board[i][j] == 1 && (x !== i && y !== j)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));