var express = require('express');
var router = express.Router();
const connection = require("./../bbdd");


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM shows;', function(error, results, fields) {
        if (error) throw error;
        res.render('carrito', { data: results, mensaje: 'Adquiri tus entradas!' });
    });
});

router.post('/:id', function(req, res, next) {
    console.log('Datos recibidos:', req.body); // Para depuración

    let id_show = req.body.id_show;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;

    console.log(`id_show: ${id_show}, cantidad: ${cantidad}, precio: ${precio}`);

    let consulta = `INSERT INTO compra (id_user, id_show, cantidad, precio, estado_compra) 
                    VALUES ('${req.userId}', '${id_show}', '${cantidad}', '${precio}', 'en carrito')`;

    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        /* res.render('mensaje', {
            mensaje: 'Compra Finalizada Exitosamente'
        }); */
    });
});

module.exports = router;
