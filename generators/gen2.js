'use strict';

const co = require('co');
const fs = require('fs-extra-promise');

co(function* () {
    var filez = yield Promise.all([
        fs.readFileAsync('hello.txt', 'utf8'),
        fs.readFileAsync('goodbye.txt', 'utf8')
    ]);
    console.log(filez.length);
    for (var file of filez) {
        console.log(file);
    }
})
.catch(err => { console.error(err); });
