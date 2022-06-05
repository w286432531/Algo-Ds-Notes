var characterReplacement = function (s, k) {
  let result = 0;
  let map = new Map();
  let mostFreq = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    let num = map.has(s[r]) ? map.get(s[r]) + 1 : 1;
    map.set(s[r], num);
    mostFreq = Math.max(mostFreq, map.get(s[r]));
    if (r - l + 1 - mostFreq > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    result = Math.max(result, r - l + 1);
  }

  return result;
};
