//qs.no 121
function skip() {
    for (var a = 1; a <= 10; a++) {
        if (a === 5) {
            continue;
        }
        console.log(a);
    }
}
skip();
//qs.no 122
function breakseries() {
    var a = 10;
    while (a >= 0 && a--) {
        if (a == 5) {
            break;
        }
        console.log(a);
    }
}
breakseries();
//qs.no 123
function check(message) {
    var vowels = "aeiouAEIOU";
    for (var i = 0, message1 = message; i < message1.length; i++) {
        var find = message1[i];
        if (vowels.includes(find)) {
            console.log("First Vowel Found: ".concat(find));
            break;
        }
        console.log(find);
    }
}
check("zzdddffa");
