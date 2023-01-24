function Calculator(n1, n2) {
  function sum() {
    return n1 + n2;
  }

  function distract() {
    return n1 - n2;
  }

  function multiply() {
    return n1 * n2;
  }

  function divid() {
    return n1 / n2;
  }

  return { sum, distract, multiply, divid };
}

const d = Calculator(12, 9);
console.log(d.divid());
