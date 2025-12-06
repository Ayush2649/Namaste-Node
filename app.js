require("./xyz.js");

const util = require("node: util");

// const {x, calculateSum} = require("./calculate/sum.js");

// const {calculateMultiply} = require("./calculate/multiply");

const {x, calculateSum, calculateMultiply} = require("./calculate");

const data = require("./data.json");

var a = 2;

var b = 7;

calculateSum(a, b);

calculateMultiply(a, b);

console.log(data);
