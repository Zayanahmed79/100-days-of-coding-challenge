//qs.no 94
function usemap(words) {
    var wordslength = words.map(function (a) { return a.length; });
    console.log(wordslength);
}
usemap(["Talha", "Shafique", "Hamdan"]);
//qs.no 95
function no_list(numbers) {
    console.log(numbers.filter(function (a) { return a > 10; }));
}
no_list([3, 5, 6, 11, 17, 18]);
//qs.no 96
function sum_all(values) {
    console.log(values.reduce(function (a, b) { return a + b; }, 0));
}
sum_all([3, 4, 7]);
