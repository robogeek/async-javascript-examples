const cjshello = require('./index.js');

async function callHello() {
    let h = await cjshello.hello();
    console.log(h);
}

callHello()
.then(() => { console.log('callHello SUCCESS'); })
.catch(err => { console.log('callHello ERROR ', err); })

cjshello.helloCB((err, msg) => {
    if (err) {
        console.log('helloCB ERROR ', err);
    } else {
        console.log('helloCB SUCCESS ', msg);
    }
});
