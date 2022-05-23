var searchMatrix = function (matrix, target) {
  for (let numbers of matrix) {
    if (numbers[numbers.length - 1] == target) {
      return true;
    } else if (numbers[numbers.length - 1] > target) {
      return bs(numbers, target);
    }
  }
  return false;
};

function bs(numbers, target) {
  let l = 0;
  let r = numbers.length;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (numbers[mid] == target) {
      return true;
    } else if (numbers[mid] < target) {
      l = mid + 1;
    } else if (numbers[mid] > target) {
      r = mid;
    }
  }
  return false;
}
