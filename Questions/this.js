class c1 {
  f1() {
    console.log("This is function 1");
  }

  f2() {
    this.f1();
    console.log("This fucntion @2");
  }
}
