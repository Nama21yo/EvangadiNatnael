// const fs = require("fs");
// fs.readFileSync();
// is the same as
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/test.txt", "utf-8");
console.log(first);

writeFileSync("./content/result-sync.txt", `Here is  the result :  ${first}`, {
  flag: "a",
});
