const origin = {
  address1: "15th N 1321 Street",
  city: "Philadelphia",
  state: "PA",
  zip: "19121",
};

origin.address2 = "Unit C";
origin["county"] = "Philadelphia County";

origin["address2"] = "   Unit V";
console.log(origin);

console.log("_________");

for (const [x, y] of Object.entries(origin)) {
  console.log(`${x} -> ${y}`);
}
