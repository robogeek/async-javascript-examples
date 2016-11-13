'use strict';

const Promise = require('bluebird');
const fs    = require('fs-extra-promise');
const util  = require('util');

var stats = function(filez) {
    return Promise.map(filez, fname => {
        return fs.statAsync(fname);
    });
};

stats(process.argv.slice(2))
.then(results => {
    results.forEach(result => {
        console.log(util.inspect(result));
    });
})
.catch(err => { console.error(err.stack); });
