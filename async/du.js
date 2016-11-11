'use strict';

const async = require('async');
const fs    = require('fs');
const util  = require('util');

async.reduce(process.argv.slice(2), 0,
(memo, filenm, next) => {
    fs.stat(filenm, (err, stats) => {
        if (err) next(err);
        else next(undefined, stats.size + memo);
    });
},
(err, result) => {
    if (err) console.error(err.stack);
    else console.log(result);
});
