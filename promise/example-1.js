
'use strict';

Promise.resolve("Hello, world")
.then(msg => {
    console.log(msg);
    return "Greetings from step 2";
})
.then(msg => {
    console.log(msg);
    return "Greetings from step 3";
})
.then(msg => {
    console.log(msg);
})
.then(msg => {
    console.log(msg);
})
.then(msg => {
    throw new Error("What happens with errors?");
})
.then(msg => {
    console.log("This is never printed")
})
.catch(err => {
    console.error(err.stack);
});
