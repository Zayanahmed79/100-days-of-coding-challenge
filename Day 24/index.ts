//qs no 70

function loop(){
    for ( let i=1; i<=5; i++){
     console.log(i)
     }
}
loop()

//qs.no 71

// const firstnumber: number = 67
// let secondnumber: number = 21

// firstnumber = 53 // As i assign a different value(number) to variable "firstnumber" it shows me error b/c it's a
//  //const value can't be reassigned.

// secondnumber = 45 // here i can reassign a different value as this is a let variable. it can be reassigned but not 
// // be redeclare so that's why it doesn't show any error.

//qs.no 72

function check(){
     const constno: number = 31
     let letno: number = 56

     console.log(constno);
     console.log(letno);
     
     
}
check()
try{
     console.log(constno)
}catch(error){
     console.log("constno can be accessible outside the block scope{}  ")
}

try{
     console.log(letno);
}catch(eroor){
     console.log("letno can be accessible outside the block scope{}");
}

