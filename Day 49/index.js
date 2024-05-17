// Qs no 145
function executefunction(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
executefunction(add, 3, 5);
//qs no 146
var random_numbers = [1, 2, 6, 8, 9, 12, 14];
var numbers_above5 = random_numbers.filter(function (number) { return number > 5; });
console.log("Filtered numbers: ".concat(numbers_above5));
// Qs no 147
function fetchdata(callback) {
    var error = new Error("Failed to fetchdata!");
    var data = "Some hidden data!";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchdata(function (error, data) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});
