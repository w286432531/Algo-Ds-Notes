var search = function (nums, target) {
    // think about the range should high be nums.length or nums.length- 1
  let low = 0; 
  let high = nums.length - 1;
  //
  while (high > low) {
    // always use low + Math.floor((high-low + 1 for upper ) / 2)
    // when it's +1 upper the result is always to the left 
    let mid = low + Math.floor((high - low + 1) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
    //since result is to the left high = mid - 1
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  if (nums[low] == target) {
    return low;
  } else {
    return -1;
  }
};
search([-1,0,3,5,9,12],2);