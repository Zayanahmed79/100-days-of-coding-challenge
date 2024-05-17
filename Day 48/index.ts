//qs.no 142

function delayhello() : Promise<void> {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Hello World!");
            resolve();
        }, 2000);
    })
}
delayhello()
.then(() => {
    console.log("Print after 2 secs!");
})
.catch((error) => {
    console.log("Error found!", error);
})

//qs.no 143

const random_promise = new Promise<string>((resolve, reject) => {
    const passed : boolean = Math.random() > 0.5;
    if (passed){
        resolve("Succes!")
    }else{
        reject (new Error ("Failure!"))
    }
})
.then((result) => {
    console.log(result);
})
.catch((Error) => {
    console.log(Error.message);
})

//qs.no 144

const promise_1  = Promise.resolve(3)
const promise_2 = 45;
const promise_3 : Promise<void> = new Promise ((resolve) => {
    setTimeout(resolve , 100 , "foo")
})

Promise.all([promise_1,promise_2,promise_3])
.then((values) => {
    console.log(values);
})



