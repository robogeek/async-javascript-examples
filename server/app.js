'use strict';

const util = require('util');
const path = require('path');
const co   = require('co');
const fs   = require('fs-extra-promise');
const md   = require('markdown-it')({
    html: true, xhtmlOut: true, breaks: true, linkify: true, typographer: false
});
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor/async', express.static(path.join(__dirname, 'node_modules', 'async', 'dist')));
app.use('/vendor/babel', express.static(path.join(__dirname, 'node_modules', 'babel-polyfill', 'dist')));
app.use('/vendor/co', express.static(path.join(__dirname, 'node_modules', 'co')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/2texts/hello', (req, res, next) => {
    res.send({ text: "Hello, World!" });
});
app.get('/2texts/goodbye', (req, res, next) => {
    res.send({ text: "Goodbye, World!" });
});

/* app.get('/txt/lorem', co.wrap(function* (req, res, next) {
    try {
        var lorem = yield fs.readFileAsync('txt/lorem.txt', 'utf8');
        req.lorem = md.render(req.lorem);
        res.send({ text: lorem });
    } catch (e) { next(e); }
})); */

app.get('/txt/lorem',
function(req, res, next) {
    fs.readFileAsync('txt/lorem.txt', 'utf8')
    .then(text => { req.lorem = text; next(); })
    .catch(next);
},
function(req, res, next) {
    console.log('md render');
    req.lorem = md.render(req.lorem);
    console.log('res send');
    res.send({ text: req.lorem });
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(process.env.SERVERPORT);
app.on('error', err => {
    console.error(err);
});
