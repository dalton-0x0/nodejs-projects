const fs = require("fs");

fs.writeFileSync(
    "notes.txt",
    "trying to figure out node-js. it's pretty cool :)"
);

fs.appendFileSync("notes.txt", " and I just appended this extra text");

console.log("append successful!");
