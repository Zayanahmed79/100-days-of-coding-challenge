//qs.no 58

function avg(...scores: number[]) {
  let sumscore = scores.reduce((m, n) => m + n, 0);
  return sumscore / scores.length;
}
console.log(avg(100, 50));

//qs.no.59
function makeadd(addinto: number): (number) => number {
  return function (number: number): number {
    return addinto + number;
  };
}

console.log(makeadd(4)(8));

//qs.no.60

let userinfo =function(){
    let name ="zayan"
   let  age = 18
    return {
        diplayinfo : function(){
            console.log(`Name: ${name} Age: ${age}`);

            
        }
    }
}()

userinfo.diplayinfo();