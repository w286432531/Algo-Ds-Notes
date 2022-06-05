var checkInclusion = function (s1, s2) {
  let matchSet = new Set();
  let map1 = new Map();
  let map2 = new Map();
  for (let letter of s1) {
    let num = map1.has(letter) ? map1.get(letter) + 1 : 1;
    map1.set(letter, num);
  }
  let l = 0;
  for (let r = 0; r < s2.length; r++) {
    let num = map2.has(s2[r]) ? map2.get(s2[r]) + 1 : 1;
    map2.set(s2[r], num);
    if (map2.get(s2[r]) == map1.get(s2[r])) {
      matchSet.add(s2[r]);
      if (matchSet.size == map1.size) {
        return true;
      }
    }
    if (r - l + 1 == s1.length) {
      map2.set(s2[l], map2.get(s2[l]) - 1);
      if (map2.get(s2[l]) < map1.get(s2[l])) {
        matchSet.delete(s2[l]);
      }
      l++;
    }
  }
  return false;
};
