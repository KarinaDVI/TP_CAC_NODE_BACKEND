var mysql      = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'pass',
    database: 'venta_entradas_db'
});
 
connection.connect();
module.exports = connection;