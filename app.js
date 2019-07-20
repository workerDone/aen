var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const config = require('config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, config.get('HTML'))));

app.use((req, res, next) => req.url.startsWith(config.get('Root')) ? next() : res.sendFile(path.resolve(__dirname, config.get('IndexHTML'))));

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;
