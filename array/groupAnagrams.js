var groupAnagrams = function (strs) {
  let hashMap = {};
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    let copy = `${strs[i]}`;
    sortedStr = copy.split("").sort().join("");
    if (hashMap[sortedStr] != null) {
      result[hashMap[sortedStr]].push(strs[i]);
    } else {
      result.push([strs[i]]);
      hashMap[sortedStr] = result.length - 1;
    }
  }
  return result;
};
