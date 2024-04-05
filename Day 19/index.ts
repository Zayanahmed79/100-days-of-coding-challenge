//qs no.55

let origanl_array=[2, 4 , 6, 7]
// origanl_array.forEach((array)=>{
//     console.log(array*2);
    
// })

console.log(origanl_array.map(doublenumber => doublenumber*2));

//qs.no.56

let mixarrays= ["Shafique", 2009,"Tanzeel",true]
let find= mixarrays.filter((mia) => typeof mia === "string")
console.log(find);

///qs no. 57

let grades =[ 60, 70, 50, 94]

let total = grades.reduce((no, m)=>no + m, 0)

let quatity= grades.length

console.log(`Average grade = ${total/quatity}`);



