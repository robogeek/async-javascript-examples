'use strict';

const fs    = require('fs-extra-promise');
const co    = require('co');
const util  = require('util');

co(function* () {
    var texts = [
        yield fs.readFileAsync('../generators/hello.txt', 'utf8'),
        yield fs.readFileAsync('../generators/goodbye.txt', 'utf8')
    ];
    console.log(util.inspect(texts));
});
