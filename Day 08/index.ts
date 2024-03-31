//qs.no 22
let array = [12, 2, 3, 53];

console.log(array[4]); // Intentional error: arrays are zero-indexed,this index(4) doesn't exist in the array.
console.log(array[3]); // Correcting the error by accessing the correct index(3)

//qs.no 23
//condition test 1:
let a = 48;
let b = 6;

let result: boolean = a > b;
console.log(result);

// conditional test 2
let name1 = "Zayan";
let name2 = "Shafique";
let result2: Boolean = name1 === name2;
console.log(result2);

//test 3
let carname = "suzuki";

console.log(carname == "suzuki");
console.log(carname == "toyota");

//test 4
let bikename = "honda";

console.log(bikename == "honda");
console.log(bikename == "yamaha");
//test 5
let teacher = "Sir Zia Khan";

console.log(teacher == "Sir Zia Khan");
console.log(teacher == "Sir Asif Maqbool");

//test 6

let Ambani = "RICH";

console.log(Ambani == "Rich");
console.log(Ambani == "RICH");

//QS.NO 24

let mycars = ["Civic", "Supra", "G-Wagon"];

console.log(`Do I have Civic? `);
console.log(mycars.includes("Civic"));

console.log(`Do i have Audi?`);
console.log(mycars.includes("Audi"));
