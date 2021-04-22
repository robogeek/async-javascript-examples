
const aasync = import('./async.mjs');

console.log(aasync);

async function hello() {
    let ret = (await aasync).hello();
    console.log(aasync);
    return ret;
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
