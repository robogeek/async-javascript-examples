'use strict';

const fs = require('fs-extra-promise');

module.exports.cat = function(filez) {
    return Promise.all(filez.map(filenm => {
        return fs.readFileAsync(filenm, 'utf8')
        .then(data => {
            return new Promise((resolve, reject) => {
                process.stdout.write(data, 'utf8', (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        });
    }));
}

cat(process.argv.slice(2))
.catch(err => { console.error(err.stack); });
