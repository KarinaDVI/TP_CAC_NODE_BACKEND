const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const connection = require('../bbdd'); // Conexión a la base de datos

exports.register = (req, res) => {
  const { username, clave, confirmarclave, ciudad, email } = req.body;
  const query = `SELECT * FROM users WHERE username = ?`;
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      return res.status(500).send('Error interno al registrar usuario');
    }
    
    if (results.length === 0) {
      if(confirmarclave===clave){

        bcrypt.hash(clave, 8, (err, hashedPassword) => {
          if (err) {
            console.error('Error al cifrar la contraseña:', err);
            return res.status(500).send('Error interno al registrar usuario');
          }

          const password = hashedPassword;
          const insertQuery = `INSERT INTO users (username, ciudad, email, clave) VALUES (?, ?, ?, ?)`;
          
          connection.query(insertQuery, [username, ciudad, email, password], (error, results) => {
            if (error) {
              console.error('Error al ejecutar la consulta:', error);
              return res.status(500).send('Error interno al registrar usuario');
            }

            // Obtener el ID del usuario insertado
            const userid = results.insertId;

            // Generar el token JWT
            const token = jwt.sign({ id: userid, username: username }, config.secretKey, { expiresIn: config.tokenExpiresIn });
            
            // Establecer la cookie con el token
            res.cookie('authToken', token, { httpOnly: true });
            
            // Renderizar la vista con el mensaje de éxito
            res.status(201).render('mensaje', { mensaje: 'Registro realizado exitosamente' });
          });
        });
      }else{
        return res.status(404).render('register', { mensaje: 'Las claves deben ser iguales'  });
      }
    } else {
      return res.status(404).render('register', { mensaje: 'Usuario ya registrado' });
    }
  });
};

exports.login = (req, res) => {
  const { username, clave } = req.body;
  const query = `SELECT * FROM users WHERE username = ?`;

  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      return res.status(500).render('mensaje', { mensaje: 'Error interno al iniciar sesión' });
    }

    if (results.length === 0) {
      return res.status(404).render('register', { mensaje: 'Usuario inexistente' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(clave, user.clave);

    if (!passwordIsValid) {
      return res.status(401).render('login', { mensaje: 'Credenciales inválidas' });
    }
    
    const token = jwt.sign({ id: user.id_user, username: user.username }, config.secretKey, { expiresIn: config.tokenExpiresIn });
    res.cookie('authToken', token, { httpOnly: true });
    res.redirect('/');
  });
};
