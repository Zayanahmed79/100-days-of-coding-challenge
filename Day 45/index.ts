// qs.no 133

const car = {
    name : "Toyota",
    model : 2020,
    color : "Blue",

}
console.log(JSON.stringify(car));

//qs.no 134

const person = '{"name" : "zayan","age" : 19,"city" : "Nawabshah"}'

console.log(JSON.parse(person));

//qs.no 135

const cars = {
    names : "Toyota",
    release : 2018,
    color : "Blue",

}
console.log(JSON.stringify(cars , null , 2));
