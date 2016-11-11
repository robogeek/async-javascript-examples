'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

function du(filenmz) {
    var total = 0;

    return Promise.all(filenmz.map(fname => {
        return fs.statAsync(fname)
        .then(stat => {
            total += stat.size;
            return total;
        });
    }))
    .then(() => {
        return total;
    });
}

du(process.argv.slice(2))
.then(total => { console.log(total); })
.catch(err => { console.error(err.stack); });
