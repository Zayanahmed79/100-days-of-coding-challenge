//qs.no 22
var array = [12, 2, 3, 53];
console.log(array[4]); // Intentional error: arrays are zero-indexed,this index(4) doesn't exist in the array.
console.log(array[3]); // Correcting the error by accessing the correct index(3)
//qs.no 23
//condition test 1:
var a = 48;
var b = 6;
var result = a > b;
console.log(result);
// conditional test 2 
var name1 = "zayan";
var name2 = "shafique";
var result2 = name1 === name2;
console.log(result2);
//test 3
var carname = "suzuki";
console.log(carname == "suzuki");
console.log(carname == "toyota");
//test 4
var bikename = "honda";
console.log(bikename == "honda");
console.log(bikename == "yamaha");
//test 5
var teacher = "Sir Zia Khan";
console.log(teacher == "Sir Zia Khan");
console.log(teacher == "Sir Asif Maqbool");
//test 6
var Ambani = "RICH";
console.log(Ambani == "Rich");
console.log(Ambani == "RICH");
//QS.NO 24
var mycars = ["Civic", "Supra", "G-Wagon"];
console.log("Do I have Civic? ");
console.log(mycars.includes("Civic"));
console.log("Do i have Audi?");
console.log(mycars.includes("Audi"));
