var express = require('express');
var router = express.Router();
const connection = require("./../bbdd")


//Arreglar para que traiga el usuario y sus carrito realizado

router.get('/', function(req, res, next) {

   
    res.render('dashboard', {
        mensaje: 'Finalizar Compra',
        footer: 'footer',
        header: 'header',
        compras: req.session.compras
    });
/* connection.query( 'SELECT * FROM compras as c INNER JOIN shows as s on c.id_show=s.id INNER JOIN users as u ON c.id_user=c.id_user'
                , function(error, results, fields){
        
        if (error) throw error;
        /* res.json({data: results}) */
        /*  console.log(results) */
        /*res.render('dashboard',{data:results,
                            mensaje:'Datos de usuario'})
    }); */

});

router.post('/finalizar', async function(req, res, next){


    let consulta='insert into compra (id_user, id_show, cantidad, precio) values("' 
                                            + req.userId + '","' 
                                            + req.body.id +'","' 
                                            + req.body.cantidad + '","' 
                                            + req.body.precio + '")' 
    let results= await connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
        });
    req.session.compras = [];
    res.render('mensaje', {
        mensaje: 'Compra Finalizada Exitosamente'
    });
})


  module.exports = router;