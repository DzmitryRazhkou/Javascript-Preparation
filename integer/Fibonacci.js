let t1 = 0;
let t2 = 1;
let n = 100;

for (let j = 1; j <= n; j++) {
  console.log(t1);
  let sum = t1 + t2;
  t1 = t2;
  t2 = sum;
}
