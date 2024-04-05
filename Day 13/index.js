//qs.no 37
function tshirt(colour, size, logo) {
    if (colour === void 0) { colour = "Brown"; }
    if (size === void 0) { size = "Medium"; }
    if (logo === void 0) { logo = "Cool"; }
    console.log("T-shirt's details:\nT-shirt colour: ".concat(colour, ",\nT-shirt size: ").concat(size, ",\nT-shirts logo: ").concat(logo));
}
tshirt("Red", "Large", "I love Typescript");
//qs.no 38
function as(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, " is the beautiful city of ").concat(country));
}
as("karachi");
as("agra", "India");
as("tokyo", "Japan");
//qs.no 39
function pairs(pcities, pcountry) {
    console.log("".concat(pcities, ",").concat(pcountry));
}
pairs("Islamabad", "Pakistan");
pairs("Tokyo", "Japan");
pairs("London", "United Kingdom");
pairs("Jeddah", "Saudi Arab");
