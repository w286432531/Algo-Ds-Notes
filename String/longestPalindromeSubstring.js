var longestPalindrome = function (s) {
  let longestP = "";
  let currentLength = 0;
  //odd number
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      if (right - left + 1 > currentLength) {
        longestP = s.slice(left, right + 1);
        currentLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  // even number
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i+1;
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      if (right - left + 1 > currentLength) {
        longestP = s.slice(left, right + 1);
        currentLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  return longestP;
};
// var longestPalindrome = function (s) {
//   let longestP = "";
//   let currentLength = 0;
//   //odd number
//   for (let i = 0; i < s.length; i++) {
//     let left = i;
//     let right = i;
//     while (left >= 0 && right < s.length && s[left] == s[right]) {
//       if (right - left + 1 > currentLength) {
//         longestP = s.slice(left, right + 1);
//         currentLength = right - left + 1;
//       }
//       left -= 1;
//       right += 1;
//     }
//   }
// function expand(s, left, right){
  
//     while (left >= 0 && right < s.length && s[left] == s[right]) {
//       if (right - left + 1 > currentLength) {
//         longestP = s.slice(left, right + 1);
//         currentLength = right - left + 1;
//       }
//       left -= 1;
//       right += 1;
//     }
//     return R-L-1;
// }
longestPalindrome("babad");
