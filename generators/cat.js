'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');
const util  = require('util');

var cat = co.wrap(function* (filez) {
    for (var i = 0; i < filez.length; i++) {
        let filenm = filez[i];
        let data = yield fs.readFileAsync(filenm, 'utf8');
        yield new Promise((resolve, reject) => {
            process.stdout.write(data, 'utf8', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
});

cat(process.argv.slice(2))
.catch(err => { console.error(err.stack); });
