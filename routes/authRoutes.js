const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddlewareMix');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).render('mensaje', { mensaje: 'Error al cerrar sesión' });
    }
    res.clearCookie('connect.sid');
    res.clearCookie('authToken');
    res.render('mensaje', { mensaje: 'Usuario deslogueado' });
  });
});

router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).send(`Hello user ${req.session.user.username}, esta es una ruta protegida`);
});

module.exports = router;
