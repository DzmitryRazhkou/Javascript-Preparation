function myFunc() {
  console.log("Delay function");
}

setInterval(function () {
  myFunc();
}, 5000);
