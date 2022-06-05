function rotateImage(a) {
let rotate = [];
return a.map((val, index) => a.map((row) => row[index]).reverse());
return a.map((val, index) => a.map((row) => row[index])); does the same as code below.
return a.map((val, index) => val.map((row) => row[index]));
let rotate = [];
 return a.map((val, index) => a.map(row => row[index]).reverse());
let n = a.length;
for (let x = 0; x < n; x++) {
  for (let y = x; y < n; y++) {
    let temp = a[x][y];
    a[x][y] = a[y][x];
    a[y][x] = temp;
  }
  a[x].reverse();
}
return a;
}
