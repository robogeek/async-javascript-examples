'use strict';

async function rando() {
    var count = 0;
    do {
        var random = await Promise.resolve(Math.random());
        console.log(random);
        count++;
    } while (random > 0.2);
    return count;
}

rando()
.then(count => {
    console.log(count);
})
.catch(err => { console.error(err.stack); });
