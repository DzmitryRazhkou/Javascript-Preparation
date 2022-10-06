const ar = [1, 9, 15, 25];
const el = 17;
const ins = 12;
const res = [...ar.slice(0, ins), el, ...ar.slice(ins + 1)];

console.log(res);
