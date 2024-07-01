var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'pass',
    database: 'venta_entradas_db'
});

connection.connect();
/* GET home page. */
/* router.get('/', function(req, res, next) {
    
    connection.query( 'SELECT * FROM shows;', function(error,
        results, fields){
            
            if (error) throw error;
            res.json(results)
          });
  
  }); */

  
router.get('/listado/', function(req, res, next) {
    consulta = 'select * from shows'; 
    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
       
        res.render('index',{data:results, 
                            mensaje:'Listado de shows',
                            listadoshows:'listadoshows',
                            footer:'footer', 
                            header:'header',
                            mostrarListado:true,
                            mostrarNovedades:false,
                            mediosDePago:false})

      });
});
  
  module.exports = router;