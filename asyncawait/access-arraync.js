'use strict';

const fs    = require('fs-extra-promise');
require('arraync');

async function access(filez) {
    return filez.filterAsync(async (filenm) => {
        try {
            await fs.accessAsync(filenm,
                fs.constants ? fs.constants.W_OK : fs.W_OK);
            // If no error is thrown, include this in final array
            return true;
        } catch (e) {
            // Otherwise the file is not accessible, and
            // it is to be excluded.
            return false;
        }
    });
}

access(process.argv.slice(2))
.then(filez => {
    filez.forEach(filenm => { console.log(filenm); })
})
.catch(err => { console.error(err.stack); });
