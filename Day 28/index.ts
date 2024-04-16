// qs.no 82

function no_ofstring(a : string = "zayan"):number{
    return a.length
}
console.log("Number of string is : "+no_ofstring());


//qs.no 83

function cases(name:string){

    let tolower = name.toLowerCase()
    let toupper = name.toUpperCase()

    console.log(`To uppercase : ${toupper} 
                 To lowercase : ${tolower}`)
}
cases("Zayan")

//qs.no 84

function relplacement(sentence : string):string{
    return  sentence.replace(/javascript/gi , "Typescript")
}
console.log(relplacement("I love javascript, javascript is amazing"));
