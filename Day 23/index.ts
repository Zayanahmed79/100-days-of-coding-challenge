//qs.no 67

function sum(a: string, b: number): number {
  return +a + b;
}
console.log(sum("13", 22));

//qs.no 68

function multiply(a: number, b: number) {
  let product = a * b;
  return product.toFixed(2);
}
console.log(multiply(12.23, 12.54));

//qs.no.69

function division(x: number, z: number) {
  let reminder = x % z;
  let divide = Math.floor(x / z);
  return {
    reminder,
    divide,
  };
}
console.log(division(20, 7));
