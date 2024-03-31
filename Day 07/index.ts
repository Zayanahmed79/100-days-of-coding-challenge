//qs.no 16
let guestlist =["Shafique","Sandeed","Tanzeel","Aoun"]
console.log("\nI have found a bigger table and invited some new friends:\n");

guestlist.push("aneeq"),
guestlist.unshift("areeb"),
guestlist.splice(guestlist.length / 2, 0, "ayan"),

guestlist.forEach((val) => console.log("Hello " + val + ", you are invited to the dinner"))

//qs.no 19

console.log(`I'm inviting ${guestlist.length} people to the dinner`);
 
//qs.no 20

let cars:string[] =["Supra","Mustang 1969","G-Wagon","Audi A9"]
let bike:string[] =["Harley Davidson","Yamaha ","Honda 70"]
console.log(`I will be ownwer of these cars:${cars}`);
console.log(`I will be ownwer of these bikes:${bike}`);
//qs.no.21

let car  = {
    model : 2023,
    name : "Mustang 1969",
    prize: 100000
}
console.log(`Model of car is:${car.model},Prize of car is : ${car.prize},Name of car is : ${car.name}`);

