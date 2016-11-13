'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

var du = function(filez) {
    var total = 0;
    return Promise.all(filez.map(fname => {
        return fs.statAsync(fname)
        .then(stat => {
            total += stat.size;
            return total;
        });
    }))
    .then(results => {
        return total;
    });
};

du(process.argv.slice(2))
.then(total => { console.log(total); })
.catch(err => { console.error(err.stack); });
