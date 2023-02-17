const trg = {};
const sources = {
  userId: 10,
  user: "CY",
};

Object.assign(trg, sources);
console.log(trg);

console.log(Object.isSealed(trg));
