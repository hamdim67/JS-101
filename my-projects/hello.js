function hello(name) {
  return `Hello, ${name}!`;
}

const rlSync = require("readline-sync");
let name = rlSync.question("What is your name?\n");
console.log(hello("Hamdi"));
