const taxValue = [10, 20, 75, 50, 35];
const tax = taxValue.every(checkTax);

function checkTax(val) {
  return val < 100;
}

console.log(tax);

const taxValue_ = [10, 20, 75, 50, 35];
const tax_ = taxValue_.some(checkTax_);

function checkTax_(val_) {
  return val_ < 100;
}

console.log(tax_);
