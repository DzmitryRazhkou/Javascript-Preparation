// var f = [1, 2, 3, 5, 98, 12, 76];
// var h = [98, 12, 3];

// var z = f.some((s) => h.includes(s));

let fs = [
  "Action successful",
  "Action unsuccesful, please try again",
  "Action unsuccessful",
];
let g = [
  "Action successful",
  "Action successful",
  "Action unsuccesful, please try again",
];

let gt = fs.some((y) => g.includes(y));
console.log(gt);
