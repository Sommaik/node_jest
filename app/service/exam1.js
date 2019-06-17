class Exam1 {
  add(a, b) {
    return (a * 1000 + b * 1000) / 1000;
  }
  helloWorldCallback(greeting) {
    greeting("Hello", "World");
  }
}
const exam1 = new Exam1();
module.exports = exam1;
