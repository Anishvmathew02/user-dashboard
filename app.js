var createError = require('http-errors');
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'normalLayout',
  layoutsDir: __dirname + '/views/layout/',
  partialsDir: __dirname + '/views/partials/'
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
