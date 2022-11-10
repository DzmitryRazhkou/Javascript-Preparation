var r = [20, 11, 13];

numAr = numAr.filter((ar) => {
  for (var i = 2; i <= Math.sqrt(ar); i++) {
    if (ar % i === 0) return false;
  }
  return true;
});
console.log(r);
