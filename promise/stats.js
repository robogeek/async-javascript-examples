'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

Promise.all(process.argv.slice(2).map(fname => {
    return fs.statAsync(fname);
}))
.then(results => {
    results.forEach(result => {
        console.log(util.inspect(result));
    });
})
.catch(err => { console.error(err.stack); });
