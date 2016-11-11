'use strict';

const co = require('co');
const fs = require('fs-extra-promise');
const util = require('util');

var readFiles = co.wrap(function* (filenmz) {
    var ret = [];
    for (var i = 0; i < filenmz.length; i++) {
        var filenm = filenmz[i];
        ret.push({
            filename: filenm,
            contents: yield fs.readFileAsync(filenm, 'utf8')
        });
    }
    return ret;
});

readFiles([ 'hello.txt', 'goodbye.txt' ])
.then(filez => { console.log(util.inspect(filez)); })
.catch(err => { console.error(err); });
