//qs.no 106
function checkyear(year) {
    console.log("Is this a leap year or not? ".concat((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0));
}
checkyear(1616);
checkyear(1900);
//qs.no 107
function check_divisibility(value) {
    if (value % 2 === 0 && value % 3 === 0) {
        console.log("This number is divisible by both 2 and 3");
    }
    else {
        console.log("No this is not divisible by  both");
    }
}
check_divisibility(7);
//qs.no 108
function check_string(string1, string2) {
    if (string1.toLowerCase() === string2.toLowerCase()) {
        console.log("They are same!");
    }
    else {
        console.log("They are not same!");
    }
}
check_string("zayan", "ZAYAN");
