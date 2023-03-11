let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth() + 1);
let year = today.getFullYear();

today = month + "/" + dd + "/" + year;
console.log(today);
