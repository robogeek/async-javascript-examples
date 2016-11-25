'use strict';

const util = require('util');
const path = require('path');
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

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(process.env.SERVERPORT);
app.on('error', err => {
    console.error(err);
});
