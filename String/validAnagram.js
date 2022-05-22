var isAnagram = function (s, t) {
  return cleanString(s) == cleanString(t);
};
function cleanString(str) {
  return str.split("").sort().join("");
}
