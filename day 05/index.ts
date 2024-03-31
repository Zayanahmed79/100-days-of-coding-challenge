//qs.no 13
let transport = ["Honda CD 70","Honda Civic","Supra","Nissan GTR"]

// for (let b of transpot){
//     console.log(`I would like to own a ${b}`);
    
// }
 transport.forEach((b) => console.log(`I would like to own a ${b}`))

// for (let i = 0; i < transpot.length ; i++) {
//     let item = transpot[i];
//     console.log("I would like to own " + item);
//     }
//qs.no.14
let guestlist =["Shafique","Sandeed","Tanzeel","Aoun"]

guestlist.forEach((val) => console.log("Hello " + val + ", you are invited to the dinner")
)

//qs.no.15

let unguest = "Shafique";
console.log(`Unfortunatly ${unguest} can't attend the dinner`);

let newguest = "Talha"

//guestlist[guestlist.indexOf(unguest)] = newguest

guestlist.forEach((val1) => console.log("Hello " + val1 + ", you are invited to the dinner"))

 