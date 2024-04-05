var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//qs no 46
var laptop = {
    name: "Hp",
    model: "840",
    year: 2017,
    describe: function () {
        console.log("This is ".concat(laptop.name, " ").concat(laptop.model, " released in ").concat(laptop.year));
    },
};
laptop.describe();
//qs.no 47
var lap = [
    {
        name: "HP",
        model: "840",
        year: "2017",
    },
    {
        name: "Dell",
        model: "7400",
        year: "2018",
    },
];
var lap1 = lap[0], lap2 = lap[1];
console.log(lap1);
console.log(lap2);
//qs.no 48
var price1 = [1000, 1700, 1200];
var prize2 = [1300, 1900, 1400];
console.log(__spreadArray(__spreadArray([], price1, true), prize2, true).sort(function (a, b) { return b - a; }));
