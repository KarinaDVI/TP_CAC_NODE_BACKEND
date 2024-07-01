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
router.get('/', function(req, res, next) {
    connection.query( 'SELECT * FROM shows ORDER BY id DESC LIMIT 3;', function(error,
        results, fields){
            
            if (error) throw error;
            /* res.json({data: results}) */
           /*  console.log(results) */
            res.render('index',{data:results, 
                                mensaje:'Nuevos Shows!', 
                                listadoshows:null,
                                newshows:'newshows',
                                footer:'footer', 
                                header:'header',
                                mostrarListado:false,
                                mostrarNovedades:true,
                                mediosDePago:true})
          
        });
  
  });

router.get('/info', function(req, res, next) {
  res.redirect('/shows');
});



module.exports = router;
