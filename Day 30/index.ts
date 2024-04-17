// qs.no 88

function roundoff(number : number):number{
    return Math.round(number)
}
console.log(roundoff(2.47));// Answer = 2
console.log(roundoff(2.85));// Answer = 3

//qs.no 89

function convert(string : string, number :number){
    
let numbertype = parseFloat(string)
console.log(`Multiplying number with as number given as string: ${number * numbertype}`)


}
convert("12.32", 2);

//qs.no 90

function checktype(value : any):boolean{

    return isNaN(value)
}
console.log("Is not number?");

console.log(checktype(67));
console.log(checktype( "Is not a number? "+"Hello Sir Zia Khan")); 








