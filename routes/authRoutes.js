// Importa el módulo express
const express = require('express');
// Importa el módulo de autenticación
const authController = require('../controllers/authController');

// Crea un nuevo middleware de autenticación
const authMiddleware = require('../middlewares/authMiddleware');

var router = express.Router();

router.get('/login', (req, res, next)=>{
  res.render('login');
});
router.get('/register', (req, res, next)=> {
res.render('register');
});
// Ruta para registrar un nuevo usuario
router.post('/register', authController.register);

// Ruta para iniciar sesión con un usuario ya existente
router.post('/login', authController.login);

// Ruta protegida que solo puede ser accedida con autenticación,
// devuelve 'Bienvenido' al usuario autenticado.
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).send(`Hello user ${req.userId} esta es una ruta protegida`);
});

module.exports = router;