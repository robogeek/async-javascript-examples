
'use strict';

const fs = require('fs');
const util = require('util');
const async = require('async');

async.series([
    done => {
        fs.readFile('../generators/hello.txt', 'utf8', (err, text) => {
            if (err) done(err);
            else done(null, text);
        });
    },
    done => {
        fs.readFile('../generators/goodbye.txt', 'utf8', (err, text) => {
            if (err) done(err);
            else done(null, text);
        });
    }
],
// optional callback
(err, results) => {
    // results is now an array,
    // the first item is the content of 'hello.txt'
    // the first item is the content of 'goodbye.txt'
    if (err) console.error(err.stack);
    else console.log(util.inspect(results));
});
