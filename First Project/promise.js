let myPromise = new Promise((myResolve, myReject) =>{
let x = 1;

if (x == 0) {
    myResolve("OK");
}
else{
    myReject("error");
}
})
myPromise.then(
    (value) => {console.log(value)},
    (error) => {console.log(error)}
) 
//Promise.then() takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.

let newPromise = new Promise((res,rej) =>{
    setTimeout(() => {res("Good day");},3000); //settimeout (functioncallback here, timer here)    
});

newPromise.then((val) => {console.log(val)})