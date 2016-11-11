'use strict';

const co = require('co');
const fs = require('fs-extra-promise');
const util = require('util');

co(function* () {
    return yield Promise.all([
        fs.readFileAsync('hello.txt', 'utf8'),
        fs.readFileAsync('goodbye.txt', 'utf8')
    ]);
})
.then(filez => { console.log(util.inspect(filez)); })
.catch(err => { console.error(err); });
