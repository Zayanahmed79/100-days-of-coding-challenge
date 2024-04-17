//qs.no 91

let favfruits: string[] = ["Mango", "Orange", "Apple"];

favfruits.push("Watermelon");

console.log(favfruits);

//qs.no 92

function remove(z: string[]) {
  return z.pop();
}
let fruits: string[] = ["kiwi", "apple", "mango"];
console.log(remove(fruits));
console.log(fruits);

//qs.no 93

function replacing(ffruits : string[]){
    let indexoffruit = ffruits.indexOf("Banana")
    if (indexoffruit !== -1){
        ffruits[indexoffruit] = "Mango"
        console.log("After replacing:",ffruits);
        
    }else{
        console.log("Fruit not found!");
    }
}
replacing(["Kiwi","Apple","Banana","Orange","Peach",])

