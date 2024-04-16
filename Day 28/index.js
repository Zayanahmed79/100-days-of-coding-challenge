// qs.no 82
function no_ofstring(a) {
    if (a === void 0) { a = "zayan"; }
    return a.length;
}
console.log("Number of string is : " + no_ofstring());
//qs.no 83
function cases(name) {
    var tolower = name.toLowerCase();
    var toupper = name.toUpperCase();
    console.log("To uppercase : ".concat(toupper, " \n                 To lowercase : ").concat(tolower));
}
cases("Zayan");
//qs.no 84
function relplacement(sentence) {
    return sentence.replace(/javascript/gi, "Typescript");
}
console.log(relplacement("I love javascript, javascript is amazing"));
