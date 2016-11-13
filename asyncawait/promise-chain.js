
'use strict';

Promise.resolve("Hello, world")
.then(async (msg) => {
    console.log(msg);
    return "Greetings from step 2";
})
.then(async (msg) => {
    console.log(msg);
    return "Greetings from step 3";
})
.then(async (msg) => {
    console.log(msg);
})
.then(async (msg) => {
    console.log(msg);
})
.then(async (msg) => {
    throw new Error("What happens with errors?");
})
.then(async (msg) => {
    console.log("This is never printed")
})
.catch(err => {
    console.error(err.stack);
});
