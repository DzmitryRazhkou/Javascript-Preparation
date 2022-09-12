var f = [1, 2, 3, 5, 98, 12, 76];
var h = [98, 12, 3];

var b = f.some((a) => h.includes(a));
console.log(b);
