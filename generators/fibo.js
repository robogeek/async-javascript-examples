'use strict';

function* fibo() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a + b;
        b = a + b;
        a = b - a;
    }
}

var i;
var result;
var iterator = fibo();
for (i = 0; i < 15; i++) {
    result = iterator.next();
    console.log(result.value);
}
