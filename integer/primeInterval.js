let low = 10;
let high = 50;

while (low < high) {
  let flag = false;

  for (let i = 2; i < low / 2; i++) {
    if (low % i == 0) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    console.log(low + " ");
  }
  low++;
}
