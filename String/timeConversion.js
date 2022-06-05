function timeConversion(s) {
  // Write your code here
  if (s.indexOf("AM") > 0) {
    if (s[0] == "1" && s[1] == "2") {
      s = s.split("");
      s[0] = 0;
      s[1] = 0;
      s = s.join("");
    }
    return s.substring(0, s.length - 2);
  } else {
    s = s.split("");
    if (s[0] != 1 && s[1] != 2) {
      s[0] = parseInt(s[0]) + 1;
      s[1] = parseInt(s[1]) + 2;
    }
    s = s.join("");
    s = s.substring(0, s.length - 2);
    console.log(s);
    return s;
  }
}
timeConversion("02:34:50PM");
