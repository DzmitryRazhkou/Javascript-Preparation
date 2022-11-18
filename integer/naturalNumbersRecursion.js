function addRecursion(num) {
  if (num != 0) {
    return num + addRecursion(num - 1);
  } else {
    return num;
  }
}

console.log(addRecursion(10));
