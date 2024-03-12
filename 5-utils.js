const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
// Alternative Ways
module.exports.items = ["item1","item2"]
const person = {
  name : "Nuhamin"
}
module.exports.singlePerson = person