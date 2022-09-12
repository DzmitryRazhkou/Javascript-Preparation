const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];

for (let d of days) {
  d = d.charAt(0).toUpperCase() + d.substring(1);
  console.log(d);
}
