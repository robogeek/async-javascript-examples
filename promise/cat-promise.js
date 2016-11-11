'use strict';

const fs = require('fs-extra-promise');

Promise.all(process.argv.slice(2).map(filenm => {
    return fs.readFileAsync(filenm, 'utf8')
    .then(data => {
        return new Promise((resolve, reject) => {
            process.stdout.write(data, 'utf8', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
}))
.catch(err => { console.error(err.stack); });
