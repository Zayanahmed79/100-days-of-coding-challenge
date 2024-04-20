// qs.no. 103
function checknumber() {
    return Math.random() > 0.5;
}
console.log(checknumber());
//qs.no.104
function hexademail() {
    var value = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0") + "#";
    console.log(value);
}
hexademail();
//qs.no 105
function dice() {
    var dc = (Math.floor(Math.random() * 6) + 1);
    return dc;
}
console.log(dice());
