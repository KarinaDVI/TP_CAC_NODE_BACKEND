// Importa el módulo express
const express = require('express');
// Importa el módulo de autenticación
const authController = require('../controllers/authController');

// Crea un nuevo middleware de autenticación
const authMiddleware = require('../middlewares/authMiddleware');

var router = express.Router();


// Ruta para registrar un nuevo usuario
router.post('/register', authController.register);

// Ruta para iniciar sesión con un usuario ya existente
router.post('/login', authController.login);

// Ruta protegida que solo puede ser accedida con autenticación,
// devuelve 'Bienvenido' al usuario autenticado.
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).send(`Hello user ${req.userId} esta es una ruta protegida`);
});

// Ejecuta el servidor en el puerto 3000.
/* app.listen(3000, () => {
    console.log('El servidor está ejecutándose en el puerto 3000');
}); */

module.exports = router;