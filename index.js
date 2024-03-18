const information = require('./information');
// console.log(`Hi, my name is ${information.name} and I'm ${information.age} years old, I'm actually a student at ${information.campus}`);
// information.displayPassions();

const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hi, my name is ${information.name} and I'm ${information.age} years old, I'm actually a student at ${information.campus}`,
    e: "oO",
    T: "U "
}));