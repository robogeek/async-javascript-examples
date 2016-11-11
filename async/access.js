'use strict';

const async = require('async');
const fs    = require('fs');
const util  = require('util');

const access = function(filez, fini) {
    async.filter(filez, (fname, next) => {
        fs.access(fname, fs.constants ? fs.constants.W_OK : fs.W_OK, err => {
            if (err) next(null, false);
            else next(null, true);
        });
    },
    (err, results) => {
        if (err) fini(err);
        else fini(undefined, results);
    });
};

access(process.argv.slice(2), (err, results) => {
    if (err) console.error(err.stack);
    else {
        results.forEach(result => {
            console.log(result);
        });
    }
})
