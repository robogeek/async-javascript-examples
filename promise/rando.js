'use strict';

const async = require('async');

var random, count = 0;

async.doWhilst(
    next => {
        new Promise((resolve, reject) => {
            random = Math.random();
            console.log(random);
            count++;
            next();
        });
    },
    () => {
        if (random < 0.2) return false;
        else return true;
    },
    err => {
        if (err) console.error(err.stack);
        else console.log(count);
    }
);
