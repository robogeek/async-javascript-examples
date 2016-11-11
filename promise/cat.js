'use strict';

const fs = require('fs');

module.exports.cat = function(filez) {
    return Promise.all(filez.map(filenm => {
        return new Promise((resolve, reject) => {
            fs.readFile(filenm, 'utf8', (err, data) => {
                if (err) return reject(err);
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
