function higherOrder() {
  function displayHello() {
    console.log("iMac Mini");
  }
  return displayHello;
}

var func = higherOrder();
func();
