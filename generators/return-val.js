
'use strict';

const util = require('util');

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'result';
}

var iterator = genFuncWithReturn();
console.log(util.inspect(iterator.next()));
console.log(util.inspect(iterator.next()));
console.log(util.inspect(iterator.next()));

for (const x of genFuncWithReturn()) {
    console.log(x);
}
