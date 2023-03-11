let t1 = 0;
let t2 = 1;
let n = 12;

for (let j = 1; j <= n; j++) {
  console.log(t1);
  let sum = t1 + t2;
  t1 = t2;
  t2 = sum;
}

console.log("____________");

const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let sum;

  for (let i = 1; i <= num; i++) {
    console.log(n1);
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
};

fibonacci(12);
