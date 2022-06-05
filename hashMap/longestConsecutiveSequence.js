var longestConsecutive = function (nums) {
  let set = new Set();
  let result = 0;
  for (let number of nums) {
    set.add(number);
  }
  for (let number of set) {
    if (!set.has(number - 1)) {
      let tmp = 1;
      let current = number;
      while (set.has(current + 1)) {
        tmp++;
        current++;
      }
      result = Math.max(result, tmp);
    }
  }
  return result;
};
