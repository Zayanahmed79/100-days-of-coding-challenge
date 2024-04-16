//qs.no 76

function sum(a : number, b : number):number{
    return a+b
}
console.log(sum(5,5));

//qs.no 77

function greet(username: string = "anonymous"){

    console.log(`Hello ${username}, how are you today?`);

    
}
greet("Sir Zia Khan")  // With name of user
greet()   // Without name of user

//qs.no 78
//This is function declaration
function power(a:number){
    return a**2
}
console.log(power(3));

//This is function expression
const power1 = function(a:number):number{
    return a**2
}
console.log(power1(4));

