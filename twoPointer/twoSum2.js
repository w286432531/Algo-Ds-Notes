var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (numbers[left] + numbers[right] != target) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return [left + 1, right + 1];
};
