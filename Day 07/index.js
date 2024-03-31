//qs.no 16
var guestlist = ["Shafique", "Sandeed", "Tanzeel", "Aoun"];
console.log("\nI have found a bigger table and invited some new friends:\n");
guestlist.push("aneeq"),
    guestlist.unshift("areeb"),
    guestlist.splice(guestlist.length / 2, 0, "ayan"),
    guestlist.forEach(function (val) { return console.log("Hello " + val + ", you are invited to the dinner"); });
//qs.no 19
console.log("I'm inviting ".concat(guestlist.length, " people to the dinner"));
//qs.no 20
var cars = ["Supra", "Mustang 1969", "G-Wagon", "Audi A9"];
var bike = ["Harley Davidson", "Yamaha ", "Honda 70"];
console.log("I will be ownwer of these cars:".concat(cars));
console.log("I will be ownwer of these bikes:".concat(bike));
//qs.no.21
var car = {
    model: 2023,
    name: "Mustang 1969",
    prize: 100000
};
console.log("Model of car is:".concat(car.model, ",Prize of car is : ").concat(car.prize, ",Name of car is : ").concat(car.name));
