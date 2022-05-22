function alternatingSort(a) {
  let b = [];
  let x = 1;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      b[i] = a[i / 2];
      if (i > 0 && b[i] > b[i - 1]) {
        return false;
      }
    } else {
      b[i] = a[a.length - x];
      x++;
      if (b[i] > b[i - 1]) {
        return false;
      }
    }
  }
  console.log(b);
  return true;
}
alternatingSort([1, 3, 5, 6, 4, 2]);
