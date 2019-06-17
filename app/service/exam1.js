const asyncmodule = require("async");

class Exam1 {
  constructor(var1) {
    this.var1 = var1;
  }
  add(a, b) {
    return (a * 1000 + b * 1000) / 1000;
  }

  helloWorldCallback(greeting) {
    greeting("Hello", this.var1 + "World");
  }

  prom(value) {
    return new Promise((resolve, reject) => {
      if (value > 10) resolve("hello");
      else reject("lower than ten");
    });
  }

  waterfallcallback(cb) {
    asyncmodule.waterfall(
      [
        function(callback) {
          callback(null, "one", "two");
        },
        function(var1, var2, callback) {
          callback(null, "success");
        }
      ],
      function(err, result) {
        cb(err, result);
      }
    );
  }
}
const exam1 = new Exam1("This");
module.exports = exam1;
