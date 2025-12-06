const crypto = require('crypto');

console.log("hello world");

var a = 1078698;
var b = 20986;

// pbkdf2 - Password Based Key  Derivation Function 2
// Synchronous function to generate a key from a password - Will block the main thread - Don't use it
// crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
// console.log("First Key is generated");

// Asynchronous function to generate a key from a password
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated");
});

function multiplyFn(a, b){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication Result is: " + c);