//qs.no 28
let lifesatge = 0
if (lifesatge < 2){
    console.log(` IS on Infancy stage`);
}else if(lifesatge <= 6){
    console.log(`Is on Early Childhood stage`);
}else if(lifesatge <= 12){
    console.log(`Is on Middle childhood stage`);
}else if(lifesatge <= 18){
    console.log("Is on Adolescence");
}else if(lifesatge <= 40){
    console.log("Is on Early Adulthood stage ");
}else if(lifesatge <= 60){
    console.log("IS on Late Middle Adulthood stage");
}else if (lifesatge > 60){
    console.log("Is on Late Adulthood stage");   
}else {
    console.log("Your entry is not allowed");   
}
//qs.no 29
let favfruits = ["Kiwi","Mangoes","Apple","Orange","Peach"]
if (favfruits.includes("Kiwi")){

    console.log("Yes! this fruit is present in this list.");
}else{
    console.log("No! this fruit is not present in this list.");
}
//qs.no 30

let array = ["Admin","Manager","Users"]

array.forEach(array => {
    if (array === "Admin") {
        console.log(`Hello ${array} would you like to see the status report`);    
    } else {
        console.log(`Hello ${array} thank you for login please try again`);
        
    }
})
