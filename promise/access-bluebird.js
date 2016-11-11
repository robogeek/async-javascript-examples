'use strict';

const Promise = require('bluebird');
const fs    = require('fs');
const util  = require('util');

Promise.filter(process.argv.slice(2),
fname => {
    return new Promise((resolve, reject) => {
        fs.access(fname, fs.constants.W_OK, err => {
            if (err) resolve(false);
            else resolve(true);
        });
    });
})
.then(results => {
    results.forEach(result => {
        console.log(result);
    });
})
.catch(err => { console.error(err.stack); });
