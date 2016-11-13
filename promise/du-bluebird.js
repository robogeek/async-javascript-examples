'use strict';

const Promise = require('bluebird');
const fs    = require('fs-extra-promise');
const util  = require('util');

var du = function(filez) {
    return Promise.reduce(filez,
    (total, fname) => {
        return fs.statAsync(fname)
        .then(stat => {
            return total + stat.size;
        });
    }, 0);
}

du(process.argv.slice(2))
.then(total => { console.log(total); })
.catch(err => { console.error(err.stack); });
