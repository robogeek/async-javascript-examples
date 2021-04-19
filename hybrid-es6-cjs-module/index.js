
const aasync = import('./async.mjs');

console.log(aasync);

async function hello() {
    return (await aasync).hello();
}
module.exports.hello = hello;

async function callHello() {
    let h = await module.exports.hello();
    console.log(h);
}

callHello()
.then(() => { console.log('SUCCESS'); console.log(aasync); })
.catch(err => { console.log('ERROR ', err); })
