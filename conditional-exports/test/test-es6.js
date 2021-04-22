
const _condit = import('conditional-exports-module');

console.log(_condit);

_condit
.then(condit => {
    console.log(condit);
    condit.hello()
    .then(msg => { console.log(msg); })
    .catch(err => { console.error(err); });
    
    console.log(condit.func1());
})
.catch(err => { console.error(err); });

