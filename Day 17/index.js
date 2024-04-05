//qs no. 49
function myHob() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    a.forEach(function (hobby) {
        console.log("I really enjoy ".concat(hobby));
    });
}
myHob("Swimming", "Football", "Basketball");
//qs no. 50
console.log("My Ideal day, today I woke up early in the morning. The very first thing i do is to:\n1. open my dam eyes \nsecondly,\n2.I change my position \nand thirdly\n3.I finally get up from my bed");
//qs no.52
function area_rec(length, width) {
    var aarw = function () {
        console.log("Area of Rectangle: ".concat(length * width));
    };
    aarw();
}
area_rec(67, 9);
