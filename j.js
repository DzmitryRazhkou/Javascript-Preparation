function primeInterval(low, high) {
  while (low < high) {
    let flag = false;

    for (let i = 2; i < low; i++) {
      if (low % i == 0) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      console.log(low);
    }
    low++;
  }
}
primeInterval(12, 70);
