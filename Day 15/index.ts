//qs no 43
function magician(name : string[] = ["Talha ","Aoun","Hamdan"]){
    console.log(name);
    
    
}
magician()
magician(["Shafique","Sandeed","Safi"])

//qs.no 44

function sandwhich(details:string[]){
    console.log(`I want to have ${details}`);
    
}
sandwhich(["Tomaato","chicken"])
sandwhich(["Fajiti","chicken","salt"])
sandwhich(["Papproni","Cheese","Mayo","Onion"])

//qs.no 45

function car(name : string , company : string ,...opinion: [string , any][]): Object{
    let cardetail = {name , company};
    opinion.forEach(([key, value]) => cardetail[key] = value);
    return cardetail;
}
console.log(car("Corolla","Toyota",["Color", "Brown"]));






