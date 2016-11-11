'use strict';

const fs    = require('fs');
const util  = require('util');

Promise.all(process.argv.slice(2).map(fname => {
    return new Promise((resolve, reject) => {
        fs.access(fname, fs.constants.W_OK, err => {
            if (err) resolve({ fname, keep: false });
            else resolve({ fname, keep: true });
        });
    });
}))
.then(results => {
    results.filter(result => {
        return result.keep;
    })
    .map(result => {
        return result.fname;
    })
    .forEach(result => {
        console.log(result);
    });
})
.catch(err => { console.error(err.stack); });
