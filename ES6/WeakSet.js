let obj1 = { message: "Fuck" };
const newSet = new WeakSet([obj1]);
console.log(newSet.has(obj1));

let j1 = { set: "Uh" };
let j3 = { yeah: "Shit" };

const set = new WeakSet([j1, j3]);
