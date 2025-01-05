const ar = [1, 9, 15, 25, 9000, 750];
const el = '75';
const ins = 5;
const res = [...ar.slice(0, ins), el, ...ar.slice(ins)];

console.log(res);
