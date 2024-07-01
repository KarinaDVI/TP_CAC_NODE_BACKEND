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
                            mostrarAlta:false})

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
                        mostrarAlta:true})

  });

/* Alta de Producto */
router.post('/ingreso',  upload.single('img'), async function (req, res, next){
  
  // Concatenando cadenas con signo +
  let consulta = 'insert into shows (nombre, fecha, descripcion, img) values("' + req.body.nombre + '","' 
                                                                                    + req.body.fecha +'","' 
                                                                                    + req.body.descripcion + '","/images/' 
                                                                                    + req.file.originalname + '")'
  // Usando template string
  // `insert into productos(nombre, descripcion,  imagen) values('${req.body.nombre}','${req.body.descripcion}','/images/${req.file.originalname}')`
  connection.query(consulta, function (error, results, fields) {
    if (error) throw error;
    res.json({mensaje: "Alta realizada exitosamente"})
  });

  fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})
})



  module.exports = router;