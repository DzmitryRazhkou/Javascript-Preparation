function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(2);
console.log(gen.next().value);
console.log(gen.next().value);
