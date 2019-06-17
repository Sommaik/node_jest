const http = require("http");

http
  .createServer((req, res) => {
    res.end("yes you can");
  })
  .listen(8000);

console.log("Server start on port 8000");
