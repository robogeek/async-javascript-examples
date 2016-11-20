'use strict';

const myAsyncFn = async function (x, y) {
    return x + y;
};
const result = myAsyncFn(3, 5);
result.then((value) => {
    console.log(value);
});
