'use strict';

const util = require('util');

function* numbers() {
    yield 0+1;
    yield 1+1;
    yield 1+2;
    yield 2+3;
    yield 3+5;
    yield 5+8;
    yield 8+13;
    yield 13+21;
    yield 21+34;
    yield 34+55;
    yield 55+89;
    yield 89+144;
    yield 144+233;
    yield 233+377;
    yield 377+610;
    yield 610+987;
}

var iterator = numbers();
var result;

while ((result = iterator.next()).done !== true) {
    console.log(util.inspect(result));
}
console.log(util.inspect(result));
