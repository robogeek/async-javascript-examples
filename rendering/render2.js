'use strict';

const renderer = require('./renderer');

renderer.renderDirParallel('docs', 'out')
.catch(err => { console.error(err.stack); });
