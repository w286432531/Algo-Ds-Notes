var search = function (nums, target) {
    // set pointers for search range low and high
  let low = 0,
    high = nums.length - 1;
    //when low = high search end
  while (low < high) {
      //get mid low + Math.floor((high - low +1) /2);
    let mid = low + Math.floor((high - low + 1) / 2);
    //compare target to mid
    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return nums[low] == target ? low : -1;
};
search([1,3,5,7], 5);