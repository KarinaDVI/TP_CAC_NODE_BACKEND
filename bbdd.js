var mysql      = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'venta_entradasdb'
});

connection.connect();
module.exports = connection;