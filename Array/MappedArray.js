var f_st = [1, 3, 7, 9, 12, 15, 19];
var s_ns = f_st.map((f_st) => f_st * 190);
console.log(s_ns);

var n = s_ns.reduce((f, j) => f + j);
console.log(n);
