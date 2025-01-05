function ocurMinEl(arr) {
  const min = Math.min(...arr);

  console.log(min);

  // let minArr = arr.filter((value) => value === min);
  // return minArr.length;
}

console.log(ocurMinEl([1, 76, 1, 3, 3, 1]));
