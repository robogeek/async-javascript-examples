
'use strict';

const fs     = require('fs-extra-promise');
const co     = require('co');
const matter = require('gray-matter');
const md     = require('markdown-it')({
    html: true, xhtmlOut: true, breaks: true, linkify: true, typographer: false
});
const ejs    = require('ejs');
const util   = require('util');
const path   = require('path');

module.exports.readDocument = co.wrap(function *(filename) {
    var text = yield fs.readFileAsync(filename, 'utf8');
    var document = matter(text);
    document.filename = filename;
    return document;
});

module.exports.render = co.wrap(function *(filename) {
    var doc = yield module.exports.readDocument(filename);
    var rendered = md.render(doc.content);

    doc.data.content = rendered;
    rendered = ejs.render(rendered, doc.data);

    if (typeof doc.data.layout !== 'undefined') {
        var template = yield fs.readFileAsync(doc.data.layout, 'utf8')
        doc.data.content = rendered;
        rendered = ejs.render(template, doc.data);
    }

    return rendered;
});

module.exports.renderDir = co.wrap(function *(srcdir, outdir) {
    yield fs.mkdirsAsync(outdir);
    var filez = yield fs.readdirAsync(srcdir);
    for (var filenum = 0; filenum < filez.length; filenum++) {
        var fname = filez[filenum];
        var fn2render = path.join(srcdir, fname);
        var fn2write  = path.basename(fname, path.extname(fname))
        var file2write = path.join(outdir, fn2write);
        var rendered = yield module.exports.render(fn2render);
        yield fs.writeFileAsync(file2write, rendered, 'utf8');
    }
});

module.exports.renderDirParallel = co.wrap(function *(srcdir, outdir) {
    yield fs.mkdirsAsync(outdir);
    var filez = yield fs.readdirAsync(srcdir);
    yield Promise.all(filez.map(fname => {
        return co(function *() {
            var fn2render = path.join(srcdir, fname);
            var fn2write  = path.basename(fname, path.extname(fname))
            var file2write = path.join(outdir, fn2write);
            var rendered = yield module.exports.render(fn2render);
            yield fs.writeFileAsync(file2write, rendered, 'utf8');
        });
    }));
});
