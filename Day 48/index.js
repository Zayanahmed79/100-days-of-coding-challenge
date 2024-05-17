//qs.no 142
function delayhello() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Hello World!");
            resolve();
        }, 2000);
    });
}
delayhello()
    .then(function () {
    console.log("Print after 2 secs!");
})
    .catch(function (error) {
    console.log("Error found!", error);
});
console.log("----------------x--------------");
//qs.no 143
var random_promise = new Promise(function (resolve, reject) {
    var passed = Math.random() > 0.5;
    if (passed) {
        resolve("Succes!");
    }
    else {
        reject(new Error("Failure!"));
    }
})
    .then(function (result) {
    console.log(result);
})
    .catch(function (Error) {
    console.log(Error.message);
});
//qs.no 144
var promise_1 = Promise.resolve(3);
var promise_2 = 45;
var promise_3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise_1, promise_2, promise_3])
    .then(function (values) {
    console.log(values);
});
