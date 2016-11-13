'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

var stats = function(filez) {
    return Promise.all(filez.map(fname => {
        return fs.statAsync(fname);
    }));
};

stats(process.argv.slice(2))
.then(results => {
    results.forEach(result => {
        console.log(util.inspect(result));
    });
})
.catch(err => { console.error(err.stack); });
