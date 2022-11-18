function factorial(num) {
  let fact = 1;
  if (num == 0) {
    return 1;
  }

  for (let i = 1; i < num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(12));

// Recursion:

function fact_recursion(num) {
  if (num >= 1) {
    return num * fact_recursion(num - 1);
  } else {
    return 1;
  }
}

console.log(fact_recursion(5));
