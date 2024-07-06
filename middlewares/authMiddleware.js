
//mas nuevo
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    // return res.status(403).send({ auth: false, message: 'No se proveyó un token' }); 
    return res.render('login', { mensaje: 'No tiene permisos para ver esta página, inicie sesion o regístrese' });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      /* return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' }); */
      return res.status(500).render('login', { mensaje: 'No tiene permisos para ver esta página, inicie sesion o regístrese' });
    }
    req.userId = decoded.id;
    res.locals.user = decoded;  // Configurar el usuario en res.locals
    console.log(`ID de usuario: ${req.userId}`);
        console.log('Usuario:', res.locals.user);
    next();
  });
};