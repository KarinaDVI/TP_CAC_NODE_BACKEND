var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* const cors = require('cors'); */


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var showsRouter = require('./routes/shows');
var carritoRouter = require('./routes/carrito');
var authRouter = require('./routes/authRoutes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var hbs = require('hbs');

/* hbs.registerPartial('listadoshows', '{{listado}}'); */
/* hbs.registerPartial('alta', '{{alta_form}}'); */
/* hbs.registerPartial('login', '{{login}}');
hbs.registerPartial('registro', '{{registro}}');
hbs.registerPartial('eliminar', '{{eliminr_show}}'); */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shows', showsRouter);
app.use('/carrito', carritoRouter);
app.use('/auth',authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;