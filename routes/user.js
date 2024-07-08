var express = require('express');
var router = express.Router();
const connection = require("./../bbdd")


router.get('/', function(req, res, next) {
    connection.query(
      `SELECT DISTINCT(s.nombre) AS nombre, c.id_venta AS id, estado_compra, s.fecha AS fecha, c.cantidad AS cantidad, s.precio AS precio, (c.cantidad * s.precio) AS total, u.username AS username FROM compra AS c INNER JOIN shows AS s ON c.id_show = s.id INNER JOIN users AS u ON c.id_user = u.id_user`,
      function(error, results, fields) {
         if (error) throw error;
         res.render('dashboard', {
             data: results,
             mensaje: 'Finalizar Compra'
         }); 
     });
 });
 
 router.post('/finalizar/:id', function(req, res, next) {
    let fin=req.params.id
     let consulta = `UPDATE compra SET estado_compra = 'finalizado' WHERE id_venta = '${fin}'`;
 
     connection.query(consulta, function(error, results, fields) {
         if (error) throw error;
         res.render('mensaje', {
             mensaje: 'Compra Finalizada Exitosamente'
         });
     });
 });
 
 router.post('/cancelar/:id', function(req, res, next) {
    let cancel=req.params.id
     let consulta = `DELETE FROM compra WHERE id_venta = '${cancel}'`;
 
     connection.query(consulta, function(error, results, fields) {
         if (error) throw error
         res.render('mensaje', {
             mensaje: 'Cancelaste tu compra'
         });
     });
 });
 
  module.exports = router;