//qs no 43
function magician(name) {
    if (name === void 0) { name = ["Talha ", "Aoun", "Hamdan"]; }
    console.log(name);
}
magician();
magician(["Shafique", "Sandeed", "Safi"]);
//qs.no 44
function sandwhich(details) {
    console.log("I want to have ".concat(details));
}
sandwhich(["Tomaato", "chicken"]);
sandwhich(["Fajiti", "chicken", "salt"]);
sandwhich(["Papproni", "Cheese", "Mayo", "Onion"]);
//qs.no 45
function car(name, company) {
    var opinion = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        opinion[_i - 2] = arguments[_i];
    }
    var cardetail = { name: name, company: company };
    opinion.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return cardetail[key] = value;
    });
    return cardetail;
}
console.log(car("Corolla", "Toyota", ["Color", "Brown"]));
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
