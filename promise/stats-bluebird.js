'use strict';

const Promise = require('bluebird');
const fs    = require('fs-extra-promise');
const util  = require('util');

Promise.map(process.argv.slice(2),
fname => {
    return fs.statAsync(fname);
})
.then(results => {
    results.forEach(result => {
        console.log(util.inspect(result));
    });
})
.catch(err => { console.error(err.stack); });
