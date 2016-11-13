'use strict';

const async = require('async');

var random, count = 0;

async.doWhilst(
    next => {
        new Promise((resolve, reject) => {
            random = Math.random();
            count++;
            resolve(random);
        })
        .then(random => {
            console.log(random);
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
