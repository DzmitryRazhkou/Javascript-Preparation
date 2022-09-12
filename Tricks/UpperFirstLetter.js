const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "monday"];

for (let day of days) {
  console.log(day.charAt(0).toUpperCase());
  day = day.charAt(0).toUpperCase() + day.substring(1);
  console.log(day);
}
