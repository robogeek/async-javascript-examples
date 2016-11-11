
'use strict';

const fs = require('fs');
const util = require('util');

Promise.all([
    new Promise((resolve, reject) => {
        fs.readFile('../generators/hello.txt', 'utf8', (err, text) => {
            if (err) reject(err);
            else resolve(text);
        });
    }),
    new Promise((resolve, reject) => {
        fs.readFile('../generators/goodbye.txt', 'utf8', (err, text) => {
            if (err) reject(err);
            else resolve(text);
        });
    })
])
.then(results => {
    console.log(util.inspect(results));
})
.catch(err => { console.error(err.stack); });
