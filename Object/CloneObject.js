const y = {
  address_1st: "3517 Market Street",
  address_2nd: "Apt. 125",
  city: "San Francisco",
  state: "CA",
};

y.county = "San Francisco County";

const n = Object.assign({}, y);
console.log(n);
