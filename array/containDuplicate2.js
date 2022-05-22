var containsNearbyDuplicate = function (nums, k) {
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (hashmap.has(number) && i - hashmap.get(number) <= k) {
      return true;
    } else {
      hashmap.set(number, i);
    }
  }
  return false;
};
