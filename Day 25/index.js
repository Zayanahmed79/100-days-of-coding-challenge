// qs.no 73
function number() {
    var initialvalue = 43;
    console.log("Initial value: ".concat(initialvalue));
    initialvalue = 67;
    console.log("Updated value: ".concat(initialvalue));
}
number();
//qs.no 74
var a = 12;
var b = 14;
console.log("Before swapping: a = ".concat(a));
console.log("Before swapping: b = ".concat(b));
var tep = a;
a = b;
b = tep;
console.log("Ater swapping: a =".concat(a));
console.log("Ater swapping: b =".concat(b));
// qs.no 75
function arthmetic() {
    var x = 5;
    x += 2;
    console.log(x); //Addition (7)
    x -= 3;
    console.log(x); //Subtraction (4)
    x *= 2;
    console.log(x); //Multiplication (8)
    x /= 2;
    console.log(x); // Division (4)
}
arthmetic();
