const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.render('login', { mensaje: 'No tiene permisos para ver esta página, inicie sesión o regístrese' });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).render('login', { mensaje: 'No tiene permisos para ver esta página, inicie sesión o regístrese' });
    }

    // Token válido, configurar el usuario en res.locals o req.session
    req.userId = decoded.id;
    res.locals.user = {
      id: decoded.id,
      username: decoded.username // Asegúrate de incluir username si lo necesitas
    };
    console.log(`ID de usuario: ${req.userId}`);
    console.log('Usuario:', res.locals.user);
    next();
  });
};