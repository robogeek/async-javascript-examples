'use strict';

const Promise = require('bluebird');
const fs    = require('fs-extra-promise');
const util  = require('util');

Promise.reduce(process.argv.slice(2),
(total, fname) => {
    return fs.statAsync(fname)
    .then(stat => {
        return total + stat.size;
    });
}, 0)
.then(total => {
    console.log(total);
})
.catch(err => { console.error(err.stack); });
