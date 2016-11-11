'use strict';

const co    = require('co');

co(function* () {
    var count = 0;
    do {
        var random = yield Promise.resolve(Math.random());
        console.log(random);
        count++;
    } while (random > 0.2);
    return count;
})
.then(count => {
    console.log(count);
})
.catch(err => { console.error(err.stack); });
