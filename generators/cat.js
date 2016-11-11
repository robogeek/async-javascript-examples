'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');
const util  = require('util');

function stdoutwrite(data) {
    return new Promise((resolve, reject) => {
        process.stdout.write(data, 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

co(function* () {
    try {
        const filenmz = process.argv.slice(2);
        for (var i = 0; i < filenmz.length; i++) {
            let filenm = filenmz[i];
            let data = yield fs.readFileAsync(filenm, 'utf8');
            yield stdoutwrite(data);
        }
    } catch (e) {
        console.error(e.stack);
    }
});
