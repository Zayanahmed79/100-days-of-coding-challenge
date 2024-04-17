//qs.no 94

function usemap(words: string[]) {
  let wordslength = words.map((a) => a.length);
  console.log(wordslength);
}
usemap(["Talha", "Shafique", "Hamdan"]);

//qs.no 95

function no_list(numbers: number[]) {
  console.log(numbers.filter((a) => a > 10));
}
no_list([3, 5, 6, 11, 17, 18]);

//qs.no 96

function sum_all(values : number[]){
   console.log(values.reduce((a,b)=>a+b,0));
    
}
sum_all([3,4,7])
