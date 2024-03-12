// path built
const { log } = require("console");
const path = require("path");
// console.log(path);
console.log(path.sep); //My platform Specific separator

const filePath = path.join("/content/", "test.txt");
console.log(filePath);

const base = path.basename(filePath); //The last file
console.log(base);

const absolute = path.resolve(__dirname, "content", "test.txt");
console.log(absolute);
