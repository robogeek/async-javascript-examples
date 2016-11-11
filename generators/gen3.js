'use strict';

const co = require('co');
const fs = require('fs-extra-promise');
const util = require('util');

co(function* () {
    var ret = [];
    ret.push({
        filename: 'hello.txt',
        contents: yield fs.readFileAsync('hello.txt', 'utf8')
    });
    ret.push({
        filename: 'goodbye.txt',
        contents: yield fs.readFileAsync('goodbye.txt', 'utf8')
    });
    return ret;
})
.then(filez => { console.log(util.inspect(filez)); })
.catch(err => { console.error(err); });
