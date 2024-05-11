//Qs.no 139

const person : string | number = "Shafique"

if (typeof person === "string"){
    console.log("Shafique goes to london");
}else{
    console.log("he goes to Karachi");   

}

function sum(a : number , b : number ){
    return a + b;
}
console.log(sum(23 , 67))

//Qs.no 140

// const if : string = "Aoun";/This causes syntax error b/c if is a recerverd key word and can't reassaign and named as varialbe

console.log("This shows syntax error!");

//qs.no 141

async function fetchdata() {

    const data = await fetchsomthing();
    console.log(data);
}

console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );



  
