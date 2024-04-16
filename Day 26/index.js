//qs.no 76
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 5));
//qs.no 77
function greet(username) {
    if (username === void 0) { username = "anonymous"; }
    console.log("Hello ".concat(username, ", how are you today?"));
}
greet("Sir Zia Khan"); // With name of user
greet(); // Without name of user
//qs.no 78
//This is function declaration
function power(a) {
    return Math.pow(a, 2);
}
console.log(power(3));
//This is function expression
var power1 = function (a) {
    return Math.pow(a, 2);
};
console.log(power1(4));
