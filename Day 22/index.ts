// qs.no.64

function student(Myage:string,age:number):string{
    return Myage+age
    
}
console.log(student("My age:",19));
 
//qs.no.65

function leftover(numenator:number,denominator:number):number{
    let reminder = numenator%denominator
    return reminder
}
console.log(leftover(5,2));

//qs.no.66

function checkboth(a:boolean,b:boolean):boolean{
    return a && b
}
console.log(checkboth(false,true));
