
const condit = require('conditional-exports-module');

console.log(condit);
condit.hello()
.then(msg => { console.log(msg); })
.catch(err => { console.error(err); });

console.log(condit.func1());
