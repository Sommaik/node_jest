const fs = require("fs");

fs.watchFile("app/message.txt", (curr, prev) => {
  fs.readFile("app/message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
