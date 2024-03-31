// qs.no.14
let guestlist =["Shafique","Sandeed","Tanzeel","Aoun"]

// guestlist.forEach((val) => console.log("Hello " + val + ", you are invited to the dinner")

//qs.no.15

let unguest = "Shafique";
console.log(`Unfortunatly ${unguest} can't attend the dinner`);

let newguest = "Talha"
guestlist[guestlist.indexOf(unguest)] = newguest

guestlist.forEach((val1) => console.log("Hello " + val1 + ", you are invited to the dinner"))
//qs.no 16
console.log("\nI have found a bigger table and invited some new friends:\n");

guestlist.push("aneeq"),
guestlist.unshift("areeb"),
guestlist.splice(guestlist.length / 2, 0, "ayan"),

guestlist.forEach((val) => console.log("Hello " + val + ", you are invited to the dinner"))

//qs.no17
console.log("\nUnfortunatly, I can invite only two people\n")

while(guestlist.length > 2){
    let removeguest = guestlist.pop()
    console.log(` Sorry ${removeguest}, You are not invited at the dinner`);
}
guestlist.forEach((val) => console.log(`${val}, you are still invited`)
)
guestlist.splice(0 , guestlist.length)
console.log(guestlist);

//qs.no 18
let visplaces = ["Murre","Islamabad","Karachi","Lahore","Sehwan"]

console.log(`Orignal order: ${visplaces}`);
console.log(`Alphabetical order: ${[...visplaces].sort()}`);
console.log(`Orignal order: ${visplaces}`);
console.log(`Revrse alphabetcal order: ${[...visplaces].sort().reverse()}`);
console.log(`Orignal order: ${visplaces}`);
console.log(`Reverse order: ${visplaces.reverse()}`);







