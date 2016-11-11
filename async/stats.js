
'use strict';

const async = require('async');
const fs    = require('fs');
const util  = require('util');

async.map(process.argv.slice(2), fs.stat, (err, results) => {
    if (err) console.error(err.stack);
    else {
        results.forEach(result => {
            console.log(util.inspect(result));
        });
    }
});
