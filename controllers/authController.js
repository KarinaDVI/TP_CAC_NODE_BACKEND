const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const connection = require('../bbdd'); // Conexión a la base de datos

/* exports.register = (req, res) => {
  const { username, clave } = req.body;
  bcrypt.hash(clave, 8, (err, hashedPassword) => {
    if (err) return res.status(500).send();

    const password = hashedPassword;
    const query = `INSERT INTO users (username, ciudad, email, clave) VALUES (?, ?, ?, ?)`;
    connection.query(query, [username, req.body.ciudad, req.body.email, password], (error, results) => {
      if (error) return res.status(500).send(error);
      const userid = results.insertId;
      const token = jwt.sign({ id: userid }, config.secretKey, { expiresIn: config.tokenExpiresIn });
      res.status(201).render('mensaje', { mensaje: 'Registro realizado exitosamente' });
    });
  });
};

exports.login = (req, res) => {
  const { username, clave } = req.body;
  const query = `SELECT * FROM users WHERE username = ?`;
  connection.query(query, [username], (error, results) => {
    if (error) return res.status(500).render('mensaje', { mensaje: 'error'+error });
    if (results.length === 0) return res.status(404).render('login', { mensaje: 'usuario inexistente' });
    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(clave, user.clave);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: config.tokenExpiresIn });
    res.cookie('authToken', token, { httpOnly: true });
    res.redirect('/');
  });
};
 */
exports.register = (req, res) => {
  const { username, clave, ciudad, email } = req.body;

  bcrypt.hash(clave, 8, (err, hashedPassword) => {
    if (err) {
      console.error('Error al cifrar la contraseña:', err);
      return res.status(500).send('Error interno al registrar usuario');
    }

    const password = hashedPassword;
    const query = `INSERT INTO users (username, ciudad, email, clave) VALUES (?, ?, ?, ?)`;
    connection.query(query, [username, ciudad, email, password], (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        return res.status(500).send('Error interno al registrar usuario');
      }

      const userid = results.insertId;
      const token = jwt.sign({ id: userid }, config.secretKey, { expiresIn: config.tokenExpiresIn });
      res.cookie('authToken', token, { httpOnly: true });
      res.status(201).render('mensaje', { mensaje: 'Registro realizado exitosamente' });
    });
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
      return res.status(404).render('login', { mensaje: 'Usuario inexistente' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(clave, user.clave);

    if (!passwordIsValid) {
      return res.status(401).render('login', { mensaje: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: config.tokenExpiresIn });
    res.cookie('authToken', token, { httpOnly: true });
    res.redirect('/');
  });
};
//Viejo:
/* exports.login = (req, res) => {
  const { username, clave } = req.body;

  const query = `SELECT * FROM users WHERE username = "${username}"`;
  connection.query(query, (error, results) => {
    if (error) throw error;
    if (results.length === 0) {
      return res.status(404).send('Usuario no encontrado.');
    }

    const passwordIsValid = bcrypt.compareSync(clave, results[0].clave);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ id: results[0].id_user }, config.secretKey, { expiresIn: config.tokenExpiresIn });
     res.cookie('authToken', token, { httpOnly: true });
    // res.status(200).send({ auth: true, token }); 
    res.render('index',{ mensaje:'Usuario logueado' });
  });
}; */










/* // Oiginales
exports.register = (req, res) => {
    // Captura el nombre de usuario y la contraseña de la solicitud
    const { username, password } = req.body;
    // Cifra la contraseña usando bcrypt
    bcrypt.hash(password, 8, function(err, hashedPassword) {
      if (err) return res.status(500).send();
      // Crea un nuevo objeto de usuario con un ID único
      const newUser = { id: users.length + 1, username, password: hashedPassword };
      users.push(newUser);
      // Genera un token JWT para el nuevo usuario
      const token = jwt.sign({ id: newUser.id }, config.secretKey, { expiresIn: config.tokenExpiresIn });
      // Envía el token como respuesta al cliente
      res.status(201).send({ auth: true, token });
    });
  };
exports.login = (req, res) => {
  // Extrae el nombre de usuario y la contraseña del cuerpo de la solicitud
  const { username, password } = req.body;
  // Busca el usuario en el array de usuarios por nombre de usuario
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found.');
  // Compara la contraseña proporcionada con la contraseña cifrada almacenada
  const passwordIsValid = bcrypt.compareSync(password, user.password);
 
  if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
  // Genera un token JWT usando el ID del usuario
  const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: config.tokenExpiresIn });
  // Envía el token JWT al cliente con el estado 200 (OK)
  res.status(200).send({ auth: true, token });
}; */
