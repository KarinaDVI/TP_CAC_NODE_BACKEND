var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query( `SELECT * FROM users WHERE username='${req.body.nombre}'`, 
                     function(error, results, fields){
        let Logueado=null;
        let Registrado=null;
        if (error) throw error;

        if (results.length > 0) {
          // Usuario encontrado, consultar si puede pasar
          if(results[0].clave==req.body.clave){
            Logueado=true;

          }else{
            Registrado=true;
            Logueado=false;
            mensaje='Usuario o clave incorrectos'
          }
        }else{
          Registrado=false;
          Logueado=false;
          mensaje='Registrese para acceder.'
        }

  res.render('sesion', { 
                        footer:'footer',
                        header:'header',
                        Logueado,
                        Registrado,
                        mensaje
                      });
  });
});

module.exports = router;