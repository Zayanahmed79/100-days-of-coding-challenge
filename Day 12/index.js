//qs .no 34
var favpizza = ["Dominos", "Broadway", "Italian"];
favpizza.forEach(function (pizza) {
    if (pizza === "Dominos") {
        console.log("I like ".concat(pizza, " because of its cheese present at its corners."));
    }
    else if (pizza === "Broadway") {
        console.log("I like ".concat(pizza, " because of its new flavours that fill up my mouth with joy."));
    }
    else {
        console.log("I like ".concat(pizza, " because of its classic taste."));
    }
});
//qs.no 35
var goodpet = ["Dog", "cat", "Parrot"];
goodpet.forEach(function (gpet) {
    console.log("".concat(gpet, " is a good pet. It helps to pass good time.\nIt would be a great pet."));
});
//qs.no 36
function tshirt(colour, size, logo) {
    return "T-shirt's details:\n T-shirt colour: ".concat(colour, ",\n T-shirt size: ").concat(size, ",\n T-shirts logo: ").concat(logo);
}
var tshirtcolour = "Brown";
var tshirtsize = "M";
var tshirtlogo = "Snopp dogg";
var tshirtdetail = tshirt(tshirtcolour, tshirtsize, tshirtlogo);
console.log(tshirtdetail);
