//qs.no 79

let car = {
  model: "Cultus VXl",
  year: 2023,
  company: "Suzuki",
};
console.log(car.company);

//qs.no 80

let car1 = {
  model: "Cultus VXl",
  year: 2023,
  company: "Suzuki",
};

car1.company = "Toyota";
car1.color = "Red"
// car1 = {...car1, color : "green"}
// Object.assign(car1,{color:"blue",model: "Mehran"})

console.log(car1.model);
console.log(car1.color);

//qs.no 81


function object(car2){
    for (let a in car1){
      console.log(`${a}: ${car2[a]}`)
    }
}
object({
  Model:"Cultus VXL",
  Company: "Suzuki",
  Released:"2023",
  Color:"White"
})