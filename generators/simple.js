'use strict';

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

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 5
console.log(iterator.next().value); // 8
console.log(iterator.next().value); // 13
console.log(iterator.next().value); // 21
console.log(iterator.next().value); // 34
console.log(iterator.next().value); // 55
console.log(iterator.next().value); // 89
console.log(iterator.next().value); // 144
console.log(iterator.next().value); // 233
console.log(iterator.next().value); // 377
console.log(iterator.next().value); // 610
console.log(iterator.next().value); // 987
console.log(iterator.next().value); // 1597
console.log(iterator.next().value); // undefined
