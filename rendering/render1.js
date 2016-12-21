'use strict';

const renderer = require('./renderer');

renderer.renderDir('docs', 'out')
.catch(err => { console.error(err.stack); });
