var express = require('express');
var router = express.Router();
const connection = require("./../bbdd")

router.get('/', function(req, res, next) {
    connection.query( 'SELECT * FROM shows;', function(error,
        results, fields){
            
            if (error) throw error;
            /* res.json({data: results}) */
           /*  console.log(results) */
            res.render('carrito',{data:results,
                                mensaje:'Adquiri tus entradas!'
                        })
        });
  
  });


  router.post('/comprar/:id', function(req, res, next) {
    if (!req.session.compras) {
        req.session.compras = [];
    }

    // Extrae el ID del show y la cantidad de la solicitud
    console.log(`req.body.cantidad: ${req.body.cantidad}`); // Para depuración
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    req.session.compras.push(
        {id_show:req.params.id,
         cantidad:req.body.cantidad
        });
    req.session.compras.forEach(element => {
       console.log(`comprado el elemento ${element.id_show},${element.cantidad}`) 
    });

    let consulta =  `INSERT into compra (id_user, id_show, cantidad, precio)  values('${req.userId}',
                                                                                '${req.params.id}',
                                                                                '${req.body.cantidad}',
                                                                                '${req.body.precio}')`

    /* let consulta='insert into compra (id_user, id_show, cantidad, precio) values("' 
                                + req.userId + '","' 
                                + req.params.id +'","' 
                                + req.body.cantidad + '","' 
                                + req.body.precio + '")' */
    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;

      });
  
  });
  
  
  module.exports = router