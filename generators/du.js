'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');

var du = co.wrap(function* (filez) {
    var total = 0;
    for (var filenm of filez) {
        var stats = yield fs.statAsync(filenm);
        total += stats.size;
    }
    return total;
})

du(process.argv.slice(2))
.then(total => {
    console.log(total);
})
.catch(err => { console.error(err.stack); });
