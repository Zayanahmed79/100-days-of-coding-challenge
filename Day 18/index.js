//qs.no 52
var smartphone = {
    brand: "Oppo",
    model: "A5 2020",
    specs: {
        Storage: "64 Gb",
        screensize: "6.2 Inch",
        Batterlife: "5000 mAh",
    },
};
console.log(smartphone);
//qs no.53
var programerskill = {
    languages: ["Typescript", "Javascript", "C++"],
    framework: ["React", "Angular", ""],
    tools: ["Webpack", "Git", "Dockers"],
};
console.log("I will work on ".concat(programerskill.framework[0], ",").concat(programerskill.languages[0], ",").concat(programerskill.tools[1]));
//qs.no 54
function object() {
    var obj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        obj[_i] = arguments[_i];
    }
    var zayan = {};
    obj.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return zayan[key] = value;
    });
    return zayan;
}
console.log(object(["mobile", "oppo"], ["car", "audi"]));
