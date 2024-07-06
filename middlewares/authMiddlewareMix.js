const jwt = require('jsonwebtoken');
const config = require('../config/config');

const protectedRoutes = [
  '/',
  '/auth/login',
  '/auth/register',
  '/carrito/'
  // Agrega aquí más rutas que quieras proteger
];

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken;

  // Verificar el token para todas las solicitudes
  if (token) {
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        console.error('Error al verificar el token:', err);
        res.locals.user = null;
        return res.status(500).render('login', { mensaje: 'Error al verificar el token, inicie sesión o regístrese' });
      }

      // Token válido, configurar el usuario en res.locals
      res.locals.user = decoded;
      req.userId = decoded.id;
      console.log(`ID de usuario: ${req.userId}`);
      console.log('Usuario:', res.locals.user);
      next();
    });
  } else {
    res.locals.user = null;

    // Si la ruta NO está protegida y no hay token, redirigir a login
    if (!protectedRoutes.includes(req.path)) {
      return res.render('login', { mensaje: 'No tiene permisos para ver esta página, inicie sesión o regístrese' });
    }

    next();
  }
};

module.exports = authMiddleware;