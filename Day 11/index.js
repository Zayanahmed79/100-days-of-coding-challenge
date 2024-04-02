// qs.no 31
var userlist = [];
if (userlist.length === 0) {
    console.log("We need to find some new users");
}
else {
    console.log("Greetings!");
}
//qs.no 32
var existingusername = ["Zayan", "Shafique", "Tanzeel", "Talha", "Sandeed"];
var newusername = ["Zayan", "Tanzeel", "Ali", "Fahad", "Nasir"];
newusername.forEach(function (newuser) {
    if (existingusername.some(function (existingusername) {
        return existingusername.toLowerCase() === newuser.toLowerCase();
    })) {
        console.log("".concat(newuser, " is not available! \nPlease try another name"));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
