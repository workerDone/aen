var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  express.static(path.join(__dirname, 'public/public-view/dist/public-view'))
);

app.get('*', (req, res, next) => {
  if (req.headers['upgrade-insecure-requests']) {
    res.sendFile(
      path.resolve(__dirname, 'public/public-view/dist/public-view/index.html')
    );
  } else {
    next();
  }
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
