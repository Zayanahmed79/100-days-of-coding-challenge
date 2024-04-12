//qs.no 67
function sum(a, b) {
    return +a + b;
}
console.log(sum("13", 22));
//qs.no 68
function multiply(a, b) {
    var product = a * b;
    return product.toFixed(2);
}
console.log(multiply(12.23, 12.54));
//qs.no.69
function division(x, z) {
    var reminder = x % z;
    var divide = Math.floor(x / z);
    return {
        reminder: reminder,
        divide: divide,
    };
}
console.log(division(20, 7));
