//qs no.55
var origanl_array = [2, 4, 6, 7];
// origanl_array.forEach((array)=>{
//     console.log(array*2);
// })
console.log(origanl_array.map(function (doublenumber) { return doublenumber * 2; }));
//qs.no.56
var mixarrays = ["Shafique", 2009, "Tanzeel", true];
var find = mixarrays.filter(function (mia) { return typeof mia === "string"; });
console.log(find);
///qs no. 57
var grades = [60, 70, 50, 94];
var total = grades.reduce(function (no, m) { return no + m; }, 0);
var quatity = grades.length;
console.log("Average grade = ".concat(total / quatity));
