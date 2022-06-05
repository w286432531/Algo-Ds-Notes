var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let l = 0;
  let r = 0;
  let set = new Set();
  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    } else {
      set.add(s[r]);
      r++;
      result = Math.max(result, set.size);
    }
  }
  return result;
};
