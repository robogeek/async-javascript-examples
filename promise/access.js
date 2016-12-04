'use strict';

const fs    = require('fs');
const util  = require('util');

var access = function(filez) {
    return Promise.all(filez.map(fname => {
        return new Promise((resolve, reject) => {
            fs.access(fname,
                fs.constants ? fs.constants.W_OK : fs.W_OK,
            err => {
                if (err && 'code' in err && err.code === 'EACCES') {
                    resolve({ fname, keep: false });
                } else if (err) {
                    reject(err);
                } else {
                    resolve({ fname, keep: true });
                }
            });
        });
    }))
    .then(results => {
        return results.filter(result => {
            return result.keep;
        })
        .map(result => {
            return result.fname;
        })
    });
};

access(process.argv.slice(2))
.then(results => {
    results.forEach(result => {
        console.log(result);
    });
})
.catch(err => { console.error(err.stack); });
