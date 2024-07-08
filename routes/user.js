var express = require('express');
var router = express.Router();
const connection = require("./../bbdd")


//Arreglar para que traiga el usuario y sus carrito realizado

router.get('/', function(req, res, next) {
   
 connection.query( 'SELECT  DISTINCT(s.nombre) AS nombre, c.id_venta as id, estado_compra, s.fecha AS fecha, c.cantidad AS cantidad, s.precio AS precio, (c.cantidad * s.precio) AS total FROM compra as c INNER JOIN shows as s on c.id_show=s.id INNER JOIN users as u ON c.id_user=c.id_user ',
  function(error, results, fields){
        
        if (error) throw error;
        /* res.json({data: results}) */
         console.log(results)
         res.render('dashboard', {
            data:results,
            mensaje: 'Finalizar Compra'
        }); 
    });

});

router.post('/finalizar/:id', function(req, res, next) {
    console.log(req.body); // Para depuración

    let consulta =  `update compra set estado_compra='finalizado' where id_venta= '${req.params.id}'`

    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
        res.render('mensaje', {
            mensaje: 'Compra Finalizada Exitosamente'
        });
    });
});
router.post('/cancelar/:id', function(req, res, next) {
    console.log(req.body); // Para depuración

    let consulta =  `DELETE FROM compra where id_venta= '${req.params.id}'`

    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
        res.render('mensaje', {
            mensaje: 'Compra Finalizada Exitosamente'
        });
    });
});
  

  module.exports = router;