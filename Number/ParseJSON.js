let json = `{ "res": true, "count": 42 }`;

const obj = JSON.parse(json);
console.log(obj);

const f = JSON.stringify(obj);

console.log(typeof f);
