//qs.no 118

function printnumber(values: number[]) {
  for (let a = 1; a <= 10; a++) {
    console.log(a);
  }
}
printnumber([]);

//qs.no 119

function repeat(number: number) {
    while (number <= 5 && number++) {
        console.log("Hello World!");
  }
}
repeat(1);

//qs.no 120

function favmovies(list: string[]){
    for (let a of list){
        console.log(`This is my favorite movie: ${a}`);
    }
}
favmovies(["Inception","Focus","Bad Boys"])