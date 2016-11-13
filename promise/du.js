'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

var du = function(filez) {
    return Promise.all(filez.map(fname => {
        return fs.statAsync(fname);
    }))
    .then(results => {
        var total = 0;
        results.forEach(stats => {
            total += stats.size;
        });
        return total;
    });
};

du(process.argv.slice(2))
.then(results => { console.log(total); })
.catch(err => { console.error(err.stack); });
