let bar = null;
console.log(typeof bar === "object"); // true
console.log((bar !== null) && (typeof bar === "object")); // false

console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]")); // false

console.log((bar !== null) && (bar.constructor === Object));
console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));
console.log(Array.isArray(bar));