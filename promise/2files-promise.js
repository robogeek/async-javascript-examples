
'use strict';

const fs = require('fs-extra-promise');
const util = require('util');

Promise.all([
    fs.readFileAsync('../generators/hello.txt', 'utf8'),
    fs.readFileAsync('../generators/goodbye.txt', 'utf8')
])
.then(results => {
    console.log(util.inspect(results));
})
.catch(err => { console.error(err.stack); });
