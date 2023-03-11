function isLeap(year) {
  let a = year % 4 == 0;
  let b = year % 100 != 0;
  let c = year % 100 == 0 && year % 400 == 0;

  if (a & b || c) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeap(2020));
