//qs.no 148
// console.log("Wait for 5 secs!");
// function print_after(value : number){
//     setTimeout(() => {
//         console.log(value);
//     }, 5000);
// }
// print_after(56)
//qs.no 149
// console.log("Start!");
// setTimeout(() => {
//     console.log("Callback executed!");
// }, 0);
// console.log("End!");
//"Callback executed" is printed after "End!" b/c of event loop!
//qs.no 150
console.log("Before synchronous!");
for (var i = 0; i < 1e2; i++) {
    console.log(i);
}
console.log("After sysnchronous!");
console.log("Before Asynchronous!");
setTimeout(function () {
    console.log("Asynchronous Completed!");
}, 1000);
console.log("After Asynchronous");
