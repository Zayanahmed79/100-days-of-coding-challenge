"use strict";
// // qs.no 112 
Object.defineProperty(exports, "__esModule", { value: true });
let countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
console.log(countries);
console.log("------------------x-------------------");
// qs.no 113
function names() {
    const capitals = new Map();
    capitals.set("Canada", "Torento");
    capitals.set("Pakistan", "Islamabad");
    capitals.set("Iran", "Tehran");
    if (capitals.has("Canada")) {
        console.log(`This is the capital of canada : ${capitals.get("Canada")}`);
    }
    else {
        console.log("This is not present in the list");
    }
}
names();
console.log("------------------x-------------------");
// //qs.no 114
const students = new Map();
students.set("Shafiue", 123);
students.set("Sandeed", 567);
students.set("Hamdan", 18050);
students.forEach((id, sname) => {
    console.log(`student : ${sname} and ID : ${id}`);
});
