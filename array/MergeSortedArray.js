var merge = function (nums1, m, nums2, n) {
  let l1Index = m - 1;
  let l2Index = n - 1;
  let resultIndex = m + n - 1;
  //m cannot be smaller than n so only need to check n
  while (l2Index >= 0) {
    if (nums1[l1Index] > nums2[l2Index]) {
      nums1[resultIndex] = nums1[l1Index];
      l1Index--;
      resultIndex--;
    } else {
      nums1[resultIndex] = nums2[l2Index];
      l2Index--;
      resultIndex--;
    }
  }
};
