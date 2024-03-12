// Built-in Modules(OS,PATH,FS,HTTP)
// const os = require("console");
const os = require("os");

// info about user

const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds

console.log(`Thesystem Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
