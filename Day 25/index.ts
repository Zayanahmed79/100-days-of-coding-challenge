// qs.no 73
function number() {
  let initialvalue: number = 43;
  console.log(`Initial value: ${initialvalue}`);

  initialvalue = 67;
  console.log(`Updated value: ${initialvalue}`);
}
number();

//qs.no 74

let a = 12;
let b = 14;

console.log(`Before swapping: a = ${a}`);
console.log(`Before swapping: b = ${b}`);

let tep = a;
a = b;
b = tep;

console.log(`Ater swapping: a =${a}`);
console.log(`Ater swapping: b =${b}`);

// qs.no 75
function arthmetic() {
  let x = 5;

  x += 2;
  console.log(x); //Addition (7)

  x -= 3;
  console.log(x); //Subtraction (4)

  x *= 2;
  console.log(x); //Multiplication (8)

  x /= 2;
  console.log(x); // Division (4)
}
arthmetic();
