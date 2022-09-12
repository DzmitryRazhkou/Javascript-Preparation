const s = {
  address: "123 Market Street",
  city: "San Francisco",
  state: "CA",
};

const newS = {
  ...s,
  county: "San Francisco County",
};

console.log(newS);
