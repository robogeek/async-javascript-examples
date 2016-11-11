'use strict';

const co = require('co');

co(function* () {
    return "Hello, world";
})
.then(text => { console.log(text); })
.catch(err => { console.error(err); });
