'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');
const util  = require('util');

var access = co.wrap(function* (filez) {
    var allowed = [];
    return filez.filter(filenm => {
        try {
            yield fs.accessAsync(filenm,
                fs.constants ? fs.constants.W_OK : fs.W_OK);
            // Whether access is allowed is indicated by not throwing an error
            return true;
        } catch (err) {
            if (!(err && 'code' in err && err.code === 'EACCES')) {
                throw err;
            } else return false;
        }
    });
});

access(process.argv.slice(2))
.then(results => {
    for (var filenm of results) {
        console.log(filenm);
    }
})
.catch(err => { console.error(err.stack); });
