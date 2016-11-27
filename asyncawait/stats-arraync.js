'use strict';

const fs    = require('fs-extra-promise');
require('arraync');

async function stats(filez) {
    return filez.mapAsync(async (filenm) => {
        return await fs.statAsync(filenm);
    });
}

stats(process.argv.slice(2))
.then(results => {
    results.forEach(filenm => {
        console.log(filenm);
    });
})
.catch(err => { console.error(err.stack); });
