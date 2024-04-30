//qs.no 118
function printnumber(values) {
    for (var a = 1; a <= 10; a++) {
        console.log(a);
    }
}
printnumber([]);
//qs.no 119
function repeat(number) {
    while (number <= 5 && number++) {
        console.log("Hello World!");
    }
}
repeat(1);
//qs.no 120
function favmovies(list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var a = list_1[_i];
        console.log("This is my favorite movie: ".concat(a));
    }
}
favmovies(["Inception", "Focus", "Bad Boys"]);
