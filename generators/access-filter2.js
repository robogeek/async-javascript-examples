'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');
const util  = require('util');

co(function* () {
    var filez = process.argv.slice(2);
    var ret = [];
    for (var filenm of filez) {
        try {
            yield fs.accessAsync(filenm, fs.constants.W_OK);
            // Whether access is allowed is indicated by not throwing an error
            ret.push(filenm);
        } catch (e) { }
    }
    return ret;
})
.then(filez => {
    filez.forEach(filenm => { console.log(filenm); })
})
.catch(err => { console.error(err.stack); });
