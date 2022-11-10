var Obj = {
  result: 0,
  addNumber: function (a, b) {
    this.result = a + b;
    return this;
  },
  multipleNumber: function (a) {
    this.result = this.result * a;
    return this;
  },
};

Obj.addNumber(10, 20).multipleNumber(15);
console.log(Obj.result);
