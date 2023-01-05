function isPrime(num) {
  let flag = false;

  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(13));
