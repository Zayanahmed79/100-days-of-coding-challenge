//qs.no 61
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycle"] = 2] = "motorcycle";
})(vehicles || (vehicles = {}));
console.log(vehicles.cars); //It will show 0
console.log(vehicles[0]); //It wil show cars instead of 0
var Student = {
    name: "zayan",
    age: 18,
    courses: ["Math", "Science", "History"]
};
console.log(Student);
var circle = {
    kind: "circle",
    radius: 6
};
var rectangle = {
    kind: "rectangle",
    length: 4,
    width: 4
};
console.log(circle);
console.log(rectangle);
