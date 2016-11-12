
'use strict';

const async = require('async');
const fs    = require('fs');
const util  = require('util');

var stats = function(filez, fini) {
    async.map(filez, fs.stat, (err, results) => {
        if (err) fini(err);
        else fini(undefined, results);
    });
}

stats(process.argv.slice(2), (err, results) => {
    if (err) console.error(err.stack);
    else {
        results.forEach(result => {
            console.log(util.inspect(result));
        });
    }
});
