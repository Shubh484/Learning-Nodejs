// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
