'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

var total = 0;

Promise.all(process.argv.slice(2).map(fname => {
    return fs.statAsync(fname)
    .then(stat => {
        total += stat.size;
        return total;
    });
}))
.then(results => {
    console.log(total);
})
.catch(err => { console.error(err.stack); });
