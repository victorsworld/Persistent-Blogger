var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();

const { mongooseConnect } = require("./db")
mongooseConnect();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bloggerRouter = require('./routes/blogger');
const authorRouter = require('./routes/author')
var app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogger', bloggerRouter);
app.use('/author', authorRouter)

module.exports = app;
