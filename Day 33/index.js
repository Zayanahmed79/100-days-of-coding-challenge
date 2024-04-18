//qs.no 97
function dates() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, "0");
    var month = String(now.getMonth() + 1).padStart(2, "0");
    var year = now.getFullYear();
    console.log("".concat(day, "-").concat(month, "-").concat(year));
}
dates();
//qs.no 98
function daysleft() {
    var now = new Date();
    var nextyr = new Date(now.getFullYear() + 1, 0, 1);
    var daysleftuptonext = Math.ceil((nextyr.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    console.log(daysleftuptonext, "days left until next year");
}
daysleft();
//qs no 99
function bhd(month, day) {
    var today = new Date();
    var currentyear = today.getFullYear();
    var nextbhd = new Date(currentyear, month - 1, day, 0);
    if (today > nextbhd) {
        nextbhd.setFullYear(currentyear + 1);
    }
    console.log("Next Birthday: ".concat(nextbhd.toDateString()));
}
bhd(4, 3); //3rd April
