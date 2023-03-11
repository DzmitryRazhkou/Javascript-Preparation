function printAlphabets(i, j) {
  for (let k = i; k < j; k++) {
    var str = String.fromCharCode(k);
    console.log(str);
  }
}

// 65_91 -> capital
// 97_123 -> small

printAlphabets(65, 91);
