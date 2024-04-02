//qs.no 28
var lifesatge = 0;
if (lifesatge < 2) {
    console.log(" IS on Infancy stage");
}
else if (lifesatge <= 6) {
    console.log("Is on Early Childhood stage");
}
else if (lifesatge <= 12) {
    console.log("Is on Middle childhood stage");
}
else if (lifesatge <= 18) {
    console.log("Is on Adolescence");
}
else if (lifesatge <= 40) {
    console.log("Is on Early Adulthood stage ");
}
else if (lifesatge <= 60) {
    console.log("IS on Late Middle Adulthood stage");
}
else if (lifesatge > 60) {
    console.log("Is on Late Adulthood stage");
}
else {
    console.log("Your entry is not allowed");
}
//qs.no 29
var favfruits = ["Kiwi", "Mangoes", "Apple", "Orange", "Peach"];
if (favfruits.includes("Kiwi")) {
    console.log("Yes! this fruit is present in this list.");
}
else {
    console.log("No! this fruit is not present in this list.");
}
//qs.no 30
var array = ["Admin", "Manager", "Users"];
array.forEach(function (array) {
    if (array === "Admin") {
        console.log("Hello ".concat(array, " would you like to see the status report"));
    }
    else {
        console.log("Hello ".concat(array, " thank you for login please try again"));
    }
});
