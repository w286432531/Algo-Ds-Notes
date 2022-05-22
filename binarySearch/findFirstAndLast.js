var searchRange = function (nums, target) {
  let start = bs(nums, target, true);
  let end = bs(nums, target, false);
  return [start, end];
};
function bs(nums, target, left) {
  let l = 0,
    r = nums.length;
  while (l < r) {
    if (left == true) {
      let mid = l + Math.floor((r - l) / 2);
      //left

      if (nums[mid] < target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    } else {
      let mid = l + Math.floor((r - l) / 2);
      //right
      if (nums[mid] == target) {
        l = mid + 1;
      } else if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid;
      }
    }
  }
  if (left == true) {
    return nums[r] == target ? r : -1;
  } else {
    return nums[r - 1] == target ? r - 1 : -1;
  }
}
