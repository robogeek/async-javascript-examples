'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

async function twofiles() {
    var texts = [
        await fs.readFileAsync('hello.txt', 'utf8'),
        await fs.readFileAsync('goodbye.txt', 'utf8')
    ];
    return texts;
}

twofiles()
.then(texts => {
    console.log(util.inspect(texts));
})
.catch(err => { console.error(err.stack); });
