// qs.no 31
let userlist = [];

if (userlist.length === 0) {
  console.log("We need to find some new users");
} else {
  console.log("Greetings!");
}
//qs.no 32
let existingusername = ["Zayan", "Shafique", "Tanzeel", "Talha", "Sandeed"];
let newusername = ["Zayan", "Tanzeel", "Ali", "Fahad", "Nasir"];

newusername.forEach((newuser) => {
  if (
    existingusername.some(
      (existingusername) =>
        existingusername.toLowerCase() === newuser.toLowerCase()
    )
  ) {
    console.log(`${newuser} is not available! \nPlease try another name`);
  } else {
    console.log(`${newuser} is available.`);
  }
});
//qs.no 33
let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});