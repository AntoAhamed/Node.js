const fs = require("fs");
let text = fs.readFileSync("random.txt","utf-8");

console.log("Read a file...");
console.log(text);

console.log("Write a file...");
text = text.replace("random","node");
fs.writeFileSync("generatedNodeFile.txt",text);
