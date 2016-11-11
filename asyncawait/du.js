'use strict';

const fs    = require('fs-extra-promise');

async function du(filez) {
    var total = 0;
    await Promise.all(filez.map(async (filenm) => {
        var stats = await fs.statAsync(filenm);
        total += stats.size;
        console.log(`${filenm} ${stats.size} ${total}`);
    }));
    /* for (var filenm of filez) {
        var stats = await fs.statAsync(filenm);
        total += stats.size;
    } */
    return total;
}

du(process.argv.slice(2))
.then(total => {
    console.log(total);
})
.catch(err => { console.error(err.stack); });
