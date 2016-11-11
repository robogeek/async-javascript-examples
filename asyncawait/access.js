'use strict';

const fs    = require('fs-extra-promise');

async function access(filez) {
    var ret = [];
    for (var filenm of filez) {
        try {
            await fs.accessAsync(filenm, fs.constants.W_OK);
            // Whether access is allowed is indicated by not throwing an error
            ret.push(filenm);
        } catch (e) { }
    }
    return ret;
}

access(process.argv.slice(2))
.then(filez => {
    filez.forEach(filenm => { console.log(filenm); })
})
.catch(err => { console.error(err.stack); });
