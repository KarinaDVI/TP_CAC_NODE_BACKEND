var express = require('express');
var router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const connection = require("./../bbdd")

const fs = require('fs')

/* GET home page. */
/* router.get('/', function(req, res, next) {
    
    connection.query( 'SELECT * FROM shows;', function(error,
        results, fields){
            
            if (error) throw error;
            res.json(results)
          });
  
  }); */

  
router.get('/listado/', function(req, res, next) {
    consulta = 'select * from shows'; 
    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
       
        res.render('index',{data:results, 
                            mensaje:'Listado de shows',
                            listadoshows:'listadoshows',
                            footer:'footer', 
                            header:'header',
                            mostrarListado:true,
                            mostrarNovedades:false,
                            mediosDePago:false,
                            mostrarAlta:false,
                            mostrarEdicion:false,
                            mostrarEliminado:false})

      });
});

/* Listado con filtro por id */
router.get('/listado/:id', function(req, res, next) {

  sentencia = 'select * from shows where id = ' +  req.params.id

  connection.query(sentencia, function (error, results, fields) {
      if (error) throw error;
      res.render('index',{data:results, 
                          mensaje:'Listado de shows',
                          listadoshows:'listadoshows',
                          footer:'footer', 
                          header:'header',
                          mostrarListado:true,
                          mostrarNovedades:false,
                          mediosDePago:false,
                          mostrarAlta:false,
                          mostrarEdicion:false,
                          mostrarEliminado:false})

    });
});

  /* MostrarForm de alta */
  router.get('/alta/', function(req,res, next){

    res.render('index',{
                        mensaje:'Alta de Shows',
                        listadoshows:null,
                        footer:'footer', 
                        header:'header',
                        mostrarListado:false,
                        mostrarNovedades:false,
                        mediosDePago:false,
                        mostrarAlta:true,
                        mostrarEdicion:false,
                        mostrarEliminado:false})

  });

/* Alta de Show */
router.post('/ingreso',  upload.single('img'), async function (req, res, next){
  // Concatenando cadenas con signo +
  let consulta = 'insert into shows (nombre, fecha, descripcion, img) values("' + req.body.nombre + '","' 
                                                                                    + req.body.fecha +'","' 
                                                                                    + req.body.descripcion + '","/images/' 
                                                                                    + req.file.originalname + '")'
  connection.query(consulta, function (error, results, fields) {
    if (error) throw error;
    res.json({mensaje: "Alta realizada exitosamente"})
  });

  fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})
})

/* Modificación de Show - Anda medio medio -.-*/
router.get('/modificar/:id', function (req, res, next){
  connection.query('select * from shows where id = ' + req.params.id, function (error, results, fields) {
      if (error) throw error;
      res.render('index',{data:results,
                          mensaje:'Edicion de Shows',
                          listadoshows:null,
                          footer:'footer', 
                          header:'header',
                          mostrarListado:false,
                          mostrarNovedades:false,
                          mediosDePago:false,
                          mostrarAlta:false,
                          mostrarEdicion:true,
                          mostrarEliminado:false})

  });
})


router.put('/editar/:id',  upload.single('img'), async function (req, res, next){
  let consulta;
  console.log(req.params.id)
  if (req.file){
    consulta =  `update shows set nombre  = '${req.body.nombre}',fecha = '${req.body.fecha}', descripcion  = '${req.body.descripcion}', img = '/images/${req.file.originalname}' where id = ${req.params.id} `

    fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})
  } else {
    consulta = `update shows set nombre  = '${req.body.nombre}',fecha = '${req.body.fecha}', descripcion  = '${req.body.descripcion}' where id = ${req.params.id}` 
  }  
  connection.query(consulta, function (error, results, fields) {

    if (error) throw console.log(error + req.params.id);
    res.json({ mensaje: "Modificación realizada exitosamente" });
  });

})

//Eliminado
router.get('/eliminar/:id', function (req, res, next){

  connection.query('select * from shows where id = ' + req.params.id, function (error, results, fields) {

    if (error) throw error;
      res.render('index',{data:results,
                          mensaje:'Eliminar Show',
                          listadoshows:null,
                          footer:'footer', 
                          header:'header',
                          mostrarListado:false,
                          mostrarNovedades:false,
                          mediosDePago:false,
                          mostrarAlta:false,
                          mostrarEdicion:false,
                          mostrarEliminado:true})
  });
})

router.delete('/eliminar/:id', function (req, res, next){

  connection.query('delete from shows where id = ' + req.params.id, function (error, results, fields) {

    if (error) throw error;
    res.render('index',{mensaje: "Se ha dado de baja el producto seleccionado"})

  });
})

  module.exports = router;