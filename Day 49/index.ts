// Qs no 145

function executefunction(callback : (arg1 : number, arg2 : number) => void,
arg1 : number,
arg2 : number): void{
    callback(arg1,arg2)
}

const add = (a : number, b: number) => {
    console.log(a + b);
}

executefunction(add, 3 , 5)

//qs no 146

const random_numbers : number[] = [1,2,6,8,9,12,14] 
const numbers_above5 : number[] = random_numbers.filter((number) => number > 5)

console.log(`Filtered numbers: ${numbers_above5}`);

// Qs no 147

function fetchdata(callback : (error : Error | null , data? : string ) => void):void{
    const error = new Error("Failed to fetchdata!")
    const data = "Some hidden data!"

    if(Math.random() > 0.5){
        callback(null , data)
    }else{
        callback(error)
    }
}

fetchdata((error, data) => {
    if (error){
        console.log(error.message)
    }else{
        console.log(data);
    }
})