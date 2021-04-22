
const shared = require('./shared.js');
const _index = import('./index.mjs');

module.exports.hello = async function() {
    console.log('in CJS');
    return (await _index).hello();
}

module.exports.func1 = shared.func1;
