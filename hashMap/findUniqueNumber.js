function findUniq(arr) {
  let hashMap = {};
  let gotDuplicate = false;
  console.log(arr);
  arr.forEach((x) => {
    if (gotDuplicate == true && !hashMap[x]) {
      return x;
    }
    if (!hashMap[x]) {
      hashMap[x] = "true";
    } else {
      gotDuplicate = true;
      hashMap[x] = "false";
    }
  });
  for (let number in hashMap) {
    if (hashMap[number] == "true") return Number(number);
  }
}

findUniq([0,0,1]);
