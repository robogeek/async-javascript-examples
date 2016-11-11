'use strict';

const fs    = require('fs-extra-promise');
const util  = require('util');

async function twofiles() {
    var texts = [
        await fs.readFileAsync('../generators/hello.txt', 'utf8'),
        await fs.readFileAsync('../generators/goodbye.txt', 'utf8')
    ];
    console.log(util.inspect(texts));
}

twofiles();
