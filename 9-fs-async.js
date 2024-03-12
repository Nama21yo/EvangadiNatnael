// const fs = require("fs");
// fs.readFileSync();
// is the same as
// const { error } = require("console");
const { readFile, writeFile } = require("fs");

readFile("./content/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);
  const first = result;
  writeFile(
    "./content/result-async.txt",
    `Here is  the result :  ${first}`,
    // { flag: "a" },
    (err, result) => {
      if (err) {
        console.log("error");
        return;
      }
      console.log(result);
    }
  );
});
