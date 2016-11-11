
'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');

co(function* () {
    var filez = process.argv.slice(2);
    var ret = [];
    for (var filenm of filez) {
        var stats = yield fs.statAsync(filenm);
        ret.push(stats);
    }
    return ret;
})
.then(results => {
    results.forEach(filenm => {
        console.log(filenm);
    });
})
.catch(err => { console.error(err.stack); });
