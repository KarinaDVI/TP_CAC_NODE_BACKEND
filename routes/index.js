var express = require('express');
var router = express.Router();
const connection = require("../bbdd")

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
                                mediosDePago:true,
                                mostrarAlta:false})
        });
  
  });

router.get('/info', function(req, res, next) {
  res.redirect('/shows');
});

router.get('/login', function(req, res, next) {
  res.redirect('/sesion');
});
router.get('/registro', function(req, res, next) {
  res.redirect('/sesion');
});



module.exports = router;
