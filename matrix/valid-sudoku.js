function sudoku2(board) {
  let row = [];
  let col = [];
  let sq = [];
  for (let i = 0; i < 9; i++) {
    row.push([]);
    col.push([]);
    sq.push([]);
  }
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (board[x][y] !== ".") {
        let cell = board[x][y];
        if (row[x].includes(cell)) {
          return false;
        } else {
          row[x].push(cell);
        }
        if (col[y].includes(cell)) {
          return false;
        } else {
          col[y].push(cell);
        }
        let sqNum = Math.floor(y / 3) + Math.floor(x / 3) * 3;
        if (sq[sqNum].includes(cell)) {
          return false;
        } else {
          sq[sqNum].push(cell);
        }
      }
    }
  }
  return true;
}
let board = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];
sudoku2(board);
               //   0  1   0   
                //   1  0   0
                //   2  2             
                //   3  4   4   math.floor(3/3) 1 + math.floor(1/3)*3 
                //   5  1   1   math.floor(5/3) 1 + math.floor(1/3)*3 
                //   5  2   2   
                //   5  4   5
                //   6  4   6
                //   7  4   5   math.floor(7/3) 2 + math.floor(4/3)*3  