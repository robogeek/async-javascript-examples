'use strict';

const async = require('async');
const fs    = require('fs');

const cat = function(filez, fini) {
    async.eachSeries(filez,
    (filenm, next) => {
        fs.readFile(filenm, 'utf8', (err, data) => {
            if (err) return next(err);
            process.stdout.write(data, 'utf8', (err) => {
                if (err) next(err);
                else next();
            });
        });
    },
    err => {
        if (err) fini(err);
        else fini();
    });
};

cat(process.argv.slice(2), err => {
    if (err) console.error(err.stack);
});
