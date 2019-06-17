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

  waterfallcallback(value, cb) {
    asyncmodule.waterfall(
      [
        function(callback) {
          if (value > 10) callback("more than ten");
          else callback(null, "one", "two");
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

  seriescallback(value, cb) {
    asyncmodule.series(
      [
        function(callback) {
          if (value > 10) callback("error more than 10");
          else callback(null, "one");
        },
        function(callback) {
          callback(null, "two");
        },
        function(callback) {
          callback(null, "three");
        }
      ],
      cb
    );
  }

  parallelcallback(value, cb) {
    asyncmodule.parallel(
      [
        function(callback) {
          if (value > 10) callback("error more than 10");
          else callback(null, "one p");
        },
        function(callback) {
          callback(null, "two p");
        }
      ],
      cb
    );
  }
}
const exam1 = new Exam1("This");
module.exports = exam1;
