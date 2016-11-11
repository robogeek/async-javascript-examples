'use strict';

const fs    = require('fs-extra-promise');

async function cat(filenmz) {
    for (var filenm of filenmz) {
        let data = await fs.readFileAsync(filenm, 'utf8');
        await new Promise((resolve, reject) => {
            process.stdout.write(data, 'utf8', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}

cat(process.argv.slice(2))
.catch(err => {
    console.error(err.stack);
});
