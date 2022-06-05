var search = function (nums, target) {
  if (nums.length == 1) return nums[0] == target ? 0 : -1;
  let rotateIndex = findRotate(0, nums.length - 1, nums);
  let arr1 = nums.slice(0, rotateIndex);
  let arr2 = nums.slice(rotateIndex);
  let result1 = bs(arr1, target);
  if (result1 > -1) {
    return result1;
  }
  let result2 = bs(arr2, target);
  if (result2 > -1) {
    return result2 + rotateIndex;
  }
  return -1;
};
function bs(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
  }
  return -1;
}
function findRotate(l, r, nums) {
  if (nums[l] == nums[r]) return 0;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    } else {
      if (nums[l] > nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return 0;
}
