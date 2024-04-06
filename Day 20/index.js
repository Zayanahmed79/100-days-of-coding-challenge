//qs.no 58
function avg() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var sumscore = scores.reduce(function (m, n) { return m + n; }, 0);
    return sumscore / scores.length;
}
console.log(avg(100, 50));
//qs.no.59
function makeadd(addinto) {
    return function (number) {
        return addinto + number;
    };
}
console.log(makeadd(4)(8));
//qs.no.60
var userinfo = function () {
    var name = "zayan";
    var age = 18;
    return {
        diplayinfo: function () {
            console.log("Name: ".concat(name, " Age: ").concat(age));
        }
    };
}();
userinfo.diplayinfo();
