var express = require('express');
var router = express.Router();
const connection = require("../bbdd")
const authController = require('../controllers/authController');

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query( 'SELECT * FROM shows ORDER BY id DESC LIMIT 3;', function(error,
        results, fields){
            
            if (error) throw error;
            /* res.json({data: results}) */
           /*  console.log(results) */
            res.render('index',{data:results, 
                                mensaje:'Nuevos Shows!', 
                                newshows:'newshows',
                                footer:'footer', 
                                header:'header',
                                mostrarNovedades:true,
                                mediosDePago:true})
        });
  
  });

router.get('/info', (req, res, next)=>{
  res.redirect('/shows');
});


/* // Ruta para procesar los datos del formulario de registro
router.post('/register', authController.register);

// Ruta para iniciar sesión con un usuario existente
router.post('/login', authController.login);
 */

module.exports = router;
