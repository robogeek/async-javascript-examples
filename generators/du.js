'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');

co(function* () {
    var filez = process.argv.slice(2);
    var total = 0;
    for (var filenm of filez) {
        var stats = yield fs.statAsync(filenm);
        total += stats.size;
    }
    return total;
})
.then(total => {
    console.log(total);
})
.catch(err => { console.error(err.stack); });
