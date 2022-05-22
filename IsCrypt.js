function isCryptSolution(crypt, solution) {
  let arr = [];
  let arrIndex = 0;
  for (word of crypt) {
    arr.push([]);
    for (letter of word) {
      for (let i = 0; i < solution.length; i++) {
        if (letter == solution[i][0]) {
          arr[arrIndex].push(solution[i][1]);
        }
      }
    }
    arrIndex++;
  }
  if (
    (arr[0].length > 1 && arr[0][0] == 0) ||
    (arr[1].length > 1 && arr[1][0] == 0)
  ) {
    console.log(toInt(arr[0]));
    console.log(toInt(arr[1]));
    console.log(toInt(arr[2]));
    return false;
  } else if (toInt(arr[0]) + toInt(arr[1]) == toInt(arr[2])) {
    return true;
  } else {
    return false;
  }
}
function toInt(arr) {
  return parseInt(arr.join(""));
}

let crypt = ["WASD", "IJKL", "AOPAS"];
let solution = [
  ["W", "2"],
  ["A", "0"],
  ["S", "4"],
  ["D", "1"],
  ["I", "5"],
  ["J", "8"],
  ["K", "6"],
  ["L", "3"],
  ["O", "7"],
  ["P", "9"],
];
isCryptSolution(crypt, solution);
