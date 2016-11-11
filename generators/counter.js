function* counter() {
    var count = 0;
    var increment = 1;
    while (true) {
        count = count + increment;
        increment = (yield count) || increment;
    }
}

var iterator = counter();
console.log(iterator.next().value);    // 1
console.log(iterator.next().value);    // 2
console.log(iterator.next().value);    // 3
console.log(iterator.next(10).value);  // 13 <- Start counting by 10
console.log(iterator.next().value);    // 23
console.log(iterator.next().value);    // 33
