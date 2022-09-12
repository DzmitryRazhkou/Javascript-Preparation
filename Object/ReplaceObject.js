const f = {
  address: "353 Market Street",
  city: "SF",
  state: "CA",
  zip: 90001,
};

const j = {
  ...f,
  zip: 90050,
};

console.log(j);
