console.log("hello world");

var a = 1078698;
var b = 20986;

setTimeout(() => {
    console.log("Call me ASAP");
}, 0);

function multiplyFn(a, b){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication Result is: " + c);