var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var idTarjeta = "ALEXIS BOGGAN";

/** Editar el COM3 por el puerto que haya leido windows **/


/*
var SerialPort = require("serialport");
var port = new SerialPort("COM4", {
  baudrate: 9600
});



port.on('data', function (data) {

  var idMifer =data.toString();;



  if (idTarjeta != idMifer){

  	idTarjeta = idMifer;
  	console.log("*****");
  	console.log(idMifer);
    var fs = require('fs');

    fs.writeFile('./public/list.html', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
    });
  
 
  }  

});*/



app.use(function(req,res,next){
    req.idTarjeta = idTarjeta;
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
