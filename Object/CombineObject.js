const original = {
  street: "123 Market Street",
  city: "New York",
  state: "NY",
  zip: "10005",
};

original.street = "375 Market Street";
original.city = "San Francisco";
original.zip = "97575";

console.log(original);

const r = { ...original, original };
