var topKFrequent = function (nums, k) {
  let bucket = [];
  let result = [];
  let map = new Map();
  for (let number of nums) {
    map.set(number, (map.get(number) || 0) + 1);
  }
  for (let [n, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(n);
  }
  for (let i = bucket.length; i > 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) {
      return result;
    }
  }
};
