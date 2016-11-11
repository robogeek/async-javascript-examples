'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');


Promise.all(process.argv.slice(2).map(fname => {
    return fs.statAsync(fname);
}))
.then(results => {
    var total = 0;
    results.forEach(stats => {
        total += stats.size;
    });
    console.log(total);
})
.catch(err => { console.error(err.stack); });
