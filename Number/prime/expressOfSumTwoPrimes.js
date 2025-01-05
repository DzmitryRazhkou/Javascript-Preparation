function checkPrimeNumber(num) {
  let isPrime = true;
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

let num = 30;
let flag = false;
for (let i = 2; i < num / 2; i++) {
  if (checkPrimeNumber(i)) {
    if (checkPrimeNumber(num - i)) {
      console.log(num + " = " + i + " + " + (num - i));
      flag = true;
    }
  }
}
if (!flag) {
  console.log(number + " can not be expressed as the Sum of Two Prime Numbers");
}
