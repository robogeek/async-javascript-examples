
const aasync = import('./async.mjs');

console.log(aasync);

async function hello() {
    return (await aasync).hello();
}
module.exports.hello = hello;

function helloCB(done) {
    aasync.then(m => {
        m.hello()
        .then(msg => { done(undefined, msg); })
        .catch(err => { done(err); });
    })
    .catch(err => {
        done(err);
    });
}
module.exports.helloCB = helloCB;

async function callHello() {
    let h = await module.exports.hello();
    console.log(h);
}

callHello()
.then(() => { console.log('callHello SUCCESS'); console.log(aasync); })
.catch(err => { console.log('callHello ERROR ', err); })

helloCB((err, msg) => {
    if (err) {
        console.log('helloCB ERROR ', err);
    } else {
        console.log('helloCB SUCCESS ', msg);
        console.log(aasync);
    }
});
