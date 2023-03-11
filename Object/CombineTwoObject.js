const original = {
  street_address: "123 Main Street",
  city: "New York",
  state: "NY",
  zip: "10005",
};

let rep = {
  ...original,
  zip_updated: "10005-1546",
};

console.log(rep);
