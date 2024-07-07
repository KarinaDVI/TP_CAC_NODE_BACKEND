var express = require('express');
var router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const connection = require("./../bbdd")

const fs = require('fs');
const authMiddleware = require('../middlewares/authMiddleware');

/* GET home page. */
/* router.get('/', function(req, res, next) {
    
    connection.query( 'SELECT * FROM shows;', function(error,
        results, fields){
            
            if (error) throw error;
            res.json(results)
          });
  
  }); */

  
router.get('/listado/',authMiddleware, function(req, res, next) {
    consulta = 'select * from shows'; 
    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
       
        res.render('listadoshows',{data:results, 
                            mensaje:'Listado de shows'})

      });
});

/* Listado con filtro por id */
router.post('/listado', authMiddleware, function(req, res, next) {
  if(req.body.id){
    consulta = 'select * from shows where id = ' +  req.body.id +' LIMIT 1'
  }else{
    consulta= 'select * from shows'
  }
  connection.query(consulta, function (error, results, fields) {
      if (error) throw error;
      res.render('listadoshows', {data:results, 
                          mensaje:'Listado de shows'})
    });
});

  /* MostrarForm de alta */
  router.get('/alta/', function(req,res, next){

    res.render('alta_form',{
                        mensaje:'Alta de Shows',
                        footer:'footer', 
                        header:'header'})

  });

/* Alta de Show */
router.post('/alta',  upload.single('img'), async function (req, res, next){
  // Concatenando cadenas con signo +
  let consulta = 'insert into shows (nombre, fecha, descripcion, img, precio) values("' + req.body.nombre + '","' 
                                                                                    + req.body.fecha +'","' 
                                                                                    + req.body.descripcion + '","/images/' 
                                                                                    + req.file.originalname + '","'
                                                                                    + req.body.precio +'")'
 let results= await connection.query(consulta, function (error, results, fields) {
    if (error) throw error;
  });
  fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})
  res.render('mensaje', {mensaje: "Alta realizada exitosamente"})
})

/* Modificación de Show - Anda medio medio -.-*/
router.get('/modificar/:id', function (req, res, next){
  connection.query('select * from shows where id = ' + req.params.id, function (error, results, fields) {
      if (error) throw error;
      res.render('editar_show',{data:results,
                                mensaje:'Edicion de Shows'
                                })

  });
})


router.post('/modificar/:id',  upload.single('img'), async function (req, res, next){
  let consulta;
  if (req.file){
    consulta =  `update shows set nombre  = '${req.body.nombre}',fecha = '${req.body.fecha}', descripcion  = '${req.body.descripcion}', img = '/images/${req.file.originalname}', precio = '${req.body.precio}' where id = ${req.params.id} `

    fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})
  } else {
    consulta = `update shows set nombre  = '${req.body.nombre}', fecha = '${req.body.fecha}', descripcion  = '${req.body.descripcion}', precio = '${req.body.precio}' where id = ${req.params.id}` 
  }  
  connection.query(consulta, function (error, results, fields) {

    if (error) throw error;
    res.render('mensaje',{ mensaje: "Modificación realizada exitosamente" });
  });

})

//Eliminado
router.get('/eliminar/:id', function (req, res, next){

  connection.query('select * from shows where id = ' + req.params.id, function (error, results, fields) {

    if (error) throw error;
      res.render('eliminar_show',{data:results,
                          mensaje:'Eliminar Show'})
  });
})

router.post('/eliminar/:id', function (req, res, next){

  connection.query('delete from shows where id = ' + req.params.id, function (error, results, fields) {

    if (error) throw error;
    res.render('mensaje',{mensaje: "Se ha dado de baja el producto seleccionado"})

  });
})

  module.exports = router;