const fs = [1, 2, 3, 5, 98, 12, 76];
const sc = [98, 12, 3];

const res = fs.some((s) => sc.includes(s));
console.log(res)

console.log("___________")

let firstArray = [
    "Action successful",
    "Action unsuccesful, please try again",
    "Action unsuccessful",
];
let secondArray = [
    "Action successful",
    "Action successful",
    "Action unsuccesful, please try again",
];

let result = firstArray.some(($el) => secondArray.includes($el));
console.log(result);
