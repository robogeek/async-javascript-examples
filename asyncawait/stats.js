'use strict';

const fs    = require('fs-extra-promise');

async function stats(filez) {
    var ret = [];
    for (var filenm of filez) {
        var stats = await fs.statAsync(filenm);
        ret.push(stats);
    }
    return ret;
}

stats(process.argv.slice(2))
.then(results => {
    results.forEach(filenm => {
        console.log(filenm);
    });
})
.catch(err => { console.error(err.stack); });
