var express = require('express');
var router = express.Router();
/*var mysql = require('mysql');
    var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "node"
	});
*/

/* GET home page. */
router.get('/', function(req, res, next) {

/*var SerialPort = require("serialport").SerialPort
var port = new SerialPort("COM7", {
  baudrate: 19200
});

var idTarjeta = "";

	port.on('data', function (data) {

	  var idMifer =data.toString();

	  if (idTarjeta != idMifer){

	  	idTarjeta = idMifer;
	  	console.log("*****");
	  	console.log(idMifer);
	  	res.render('lectura', { title: idMifer });
	 
	  }  

	});		*/
  res.render('index', { title: 'Express' });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {

    res.render('newuser', { title: req.idTarjeta });
});

/* GET lectura page. */
router.get('/lectura', function(req, res) {
    res.render('lectura', { title: req.idTarjeta });
});

/* GET saludo */
router.get('/saludo', function(req, res) {
    res.render('saludo', { title: req.idTarjeta });
});

/* GET imprimir */
router.get('/imprimir', function(req, res) {
    res.render('imprimir', { title: "Tu foto en Boca", idPulsera: req.idTarjeta });
});


router.post('/adduser', function(req, res) {

    
    // Get our form values. These rely on the "name" attributes
    var nombre = req.body.nombre;
    var email = req.body.email;
    var idPulsera = req.body.idPulsera;
	
    var sql = "INSERT INTO users (nombre, email, idPulsera) VALUES ('"+nombre+"', '"+email+"', '"+idPulsera+"')";
	  



});

/* GET test. */
router.get('/test', function(req, res) {
    res.render('test', { title: 'tester' });
});

module.exports = router;
