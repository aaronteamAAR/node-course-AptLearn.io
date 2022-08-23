const fs = require("fs");
const path = require("path");

// create a file
// fs.mkdir(path.join(__dirname, "fs"), [], (err) => {
//   if (err) throw err;
//   console.log("folder created successfully..");
// });

// console.log('async')

fs.writeFile(
  path.join(__dirname, "fs", "index.js"),
  "console.log(`fuck you`)",
  (err) => {
    if (err) throw err;
    console.log("Nice file made");

    
  }
);
