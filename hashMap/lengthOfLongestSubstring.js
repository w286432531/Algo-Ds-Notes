
var lengthOfLongestSubstring = function (s) {
  let currentLength = 0;
  let left = 0;
  let right = 0;
  let chars = {};
  while (right < s.length) {
    if (chars[s[right]]) {
      delete chars[s[left]];
      left++;
    } else {
      chars[s[right]] = true;
      currentLength = Math.max(currentLength, Object.keys(chars).length);
      right++;
    }
  }
  return currentLength;
};
// var lengthOfLongestSubstring = function (s) {
//   let currentLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (checkRepeat(s, i, j)) {
//         currentLength = Math.max(currentLength, j - i + 1);
//       }
//     }
//   }
//   return currentLength;
// };

// function checkRepeat(string, start, end) {
//   let chars = {};
//   for (let z = start; z <= end; z++) {
//     chars[string[z]] ? chars[string[z]]++ : (chars[string[z]] = 1);
//     if (chars[string[z]] > 1) {
//       return false;
//     }
//   }
//   return true;
// }

lengthOfLongestSubstring("pwwkew");