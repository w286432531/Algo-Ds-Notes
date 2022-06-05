var isHappy = function (n) {
  let set = new Set();
  while (n != 1 && !set.has(n)) {
    set.add(n);
    n = getNext(n);
  }
  return n == 1;
};
function getNext(number) {
  let result = 0;
  while (number > 0) {
    let firstDigit = number % 10;
    number = Math.floor(number / 10);
    result += firstDigit * firstDigit;
  }
  return result;
}
