var findMin = function (nums) {
  if (nums.length < 2) return nums;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid] > nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[0];
};

// findMin([2, 1]);
findMin([4, 5, 1, 2, 3]);
