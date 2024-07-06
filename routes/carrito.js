var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'pass',
    database: 'venta_entradas_db'
});

router.get('/', function(req, res, next) {
    connection.query( 'SELECT * FROM shows;', function(error,
        results, fields){
            
            if (error) throw error;
            /* res.json({data: results}) */
           /*  console.log(results) */
            res.render('carrito',{data:results,
                                mensaje:'Adquiri tus entradas!'})
        });
  
  });

  router.get('/comprar/', function(req,res, next){

    let compras =[

    ]
    compras.push()
    res.render('alta_form',{
                        mensaje:'Alta de Shows',
                        footer:'footer', 
                        header:'header'})

  });
  router.post('/comprar', function(req, res, next) {
    //Averiguar como hacer para que cada vez que se haga click en agregar
    //al carrito se pushee a compras y despues armar la consulta y enviarla a la base

    connection.query( 'insert into compra (id_user, id_show, cantidad, precio) values("' 
                                            + req.body.user.id + '","' 
                                            + req.body.id_show +'","' 
                                            + req.body.cantidad + '","' 
                                            + req.file.precio + '")', 
    function(error, results, fields){
            
            if (error) throw error;
            /* res.json({data: results}) */
           /*  console.log(results) */
           /*  res.render('carrito',{data:results,
                                mensaje:'Adquiri tus entradas!'}) */
        });
  
  });
  
  
  module.exports = router;